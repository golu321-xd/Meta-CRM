from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from supabase import create_client, Client
import os
import threading
import time
import requests

app = Flask(__name__)
# HTML ko connect hone dene ke liye CORS
CORS(app)

# Keys ko Render ke environment variables se fetch karega
SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_KEY")

# Supabase connection setup (Error handle karne ke liye check lagaya hai)
if SUPABASE_URL and SUPABASE_KEY:
    supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
else:
    supabase = None
    print("Warning: Supabase keys not found in environment variables.")

# ----------------------------------------------------
# 1. EXTERNAL PING ROUTE (For UptimeRobot)
# ----------------------------------------------------
@app.route('/ping', methods=['GET'])
def ping():
    return "Pong! Server is awake.", 200

# यह रूट होमपेज पर आपकी HTML वेबसाइट दिखाएगा
@app.route('/')
def serve_frontend():
    return render_template('Meta.html')

# ----------------------------------------------------
# 2. SELF-PING MECHANISM
# ----------------------------------------------------
def keep_awake():
    while True:
        time.sleep(600)  # Har 10 minute (600 seconds) me loop chalega
        try:
            # Agar Render URL mil jaye toh usko ping karega, warna localhost ko
            render_url = os.environ.get("RENDER_EXTERNAL_URL", "http://127.0.0.1:10000")
            ping_url = f"{render_url}/ping"
            requests.get(ping_url)
            print("Self-ping successful at:", time.ctime())
        except Exception as e:
            print("Self-ping failed:", e)

# Background thread start karna taaki web server ruk na jaye
threading.Thread(target=keep_awake, daemon=True).start()

# Render par gunicorn handle karega, isliye app.run() hata diya hai.


# ----------------------------------------------------
# 3. AUTHENTICATION (Login & Register)
# ----------------------------------------------------
@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    user_id = data.get('userId')
    
    try:
        # Check if user already exists
        existing_user = supabase.table('users').select('*').eq('username', username).execute()
        if len(existing_user.data) > 0:
            return jsonify({"error": "User already exists"}), 400
            
        # Create new user
        new_user = {
            "username": username,
            "password": password,
            "user_id": user_id
        }
        supabase.table('users').insert(new_user).execute()
        return jsonify({"message": "Account created successfully!"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    input_val = data.get('username') # HTML yahan username ya ID kuch bhi bhej sakta hai
    password = data.get('password')
    
    try:
        # Supabase me check karega ki input_val Username hai YA User_ID hai
        response = supabase.table('users').select('*').or_(f"username.eq.{input_val},user_id.eq.{input_val}").execute()
        
        if len(response.data) > 0 and response.data[0]['password'] == password:
            return jsonify({"message": "Login successful", "user": response.data[0]}), 200
        else:
            return jsonify({"error": "Invalid username/ID or password"}), 401
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ----------------------------------------------------
# 4. MANAGE LEADS (Add & Fetch)
# ----------------------------------------------------
@app.route('/api/leads', methods=['GET', 'POST'])
def manage_leads():
    if request.method == 'GET':
        # Database se leads fetch karna
        owner = request.args.get('owner')
        try:
            # Agar admin hai toh sabke leads dikhao
            if owner == 'admin':
                response = supabase.table('leads').select('*').execute()
            # Sirf us user ke leads dikhao jo login hai
            else:
                response = supabase.table('leads').select('*').eq('owner', owner).execute()
            return jsonify(response.data), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    elif request.method == 'POST':
        # Naya lead add karna
        data = request.json
        try:
            supabase.table('leads').insert(data).execute()
            return jsonify({"message": "Lead added successfully!"}), 201
        except Exception as e:
            return jsonify({"error": str(e)}), 500

# ----------------------------------------------------
# 5. UPDATE & DELETE LEAD (Won, Lost, Edit, Delete)
# ----------------------------------------------------
@app.route('/api/leads/<lead_id>', methods=['PUT', 'DELETE'])
def update_delete_lead(lead_id):
    if request.method == 'PUT':
        # Lead ko Edit, Won, ya Lost mark karna
        data = request.json
        try:
            supabase.table('leads').update(data).eq('id', lead_id).execute()
            return jsonify({"message": "Lead updated successfully!"}), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 500
            
    elif request.method == 'DELETE':
        # Lead ko permanently delete karna
        try:
            supabase.table('leads').delete().eq('id', lead_id).execute()
            return jsonify({"message": "Lead deleted successfully!"}), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 500

# ----------------------------------------------------
# 6. GET ALL USERS (Sirf Admin Ke Liye)
# ----------------------------------------------------
@app.route('/api/users', methods=['GET'])
def get_users():
    owner = request.args.get('owner')
    # अगर लॉगिन करने वाला यूजर 'admin' नहीं है, तो उसे डेटा मत दो
    if owner != 'admin':
        return jsonify({"error": "Unauthorized"}), 401
        
    try:
        # Supabase से सारे यूजर्स की लिस्ट लाओ
        response = supabase.table('users').select('*').execute()
        return jsonify(response.data), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ----------------------------------------------------
# 7. GET OFFERS (For Ray-Ban Meta Catalog)
# ----------------------------------------------------
@app.route('/api/offers', methods=['GET'])
def get_offers():
    try:
        # Supabase से id के हिसाब से लाइन से डेटा मँगवाओ
        response = supabase.table('meta_offers').select('*').order('id').execute()
        return jsonify(response.data), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ----------------------------------------------------
# 8. GET GLOBAL BANNER (For Offers Header)
# ----------------------------------------------------
@app.route('/api/global-banner', methods=['GET'])
def get_global_banner():
    try:
        response = supabase.table('global_banners').select('*').eq('id', 1).execute()
        if len(response.data) > 0:
            return jsonify(response.data[0]), 200
        else:
            return jsonify({}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/reset-password', methods=['POST', 'OPTIONS'])
def reset_password():
    # CORS Error से बचने के लिए OPTIONS request को पास करना
    if request.method == 'OPTIONS':
        return jsonify({"status": "ok"}), 200

    data = request.get_json()
    username = data.get('username')
    new_password = data.get('newPassword')

    if not username or not new_password:
        return jsonify({"error": "Missing data"}), 400

    try:
        # सीधा आपकी 'users' टेबल में पासवर्ड अपडेट करेगा
        response = supabase.table('users').update({'password': new_password}).eq('username', username).execute()
        
        # अगर डेटा खाली आया (यानी यूज़र नहीं मिला)
        if not response.data:
            return jsonify({"error": "User nahi mila!"}), 404

        return jsonify({"success": True, "message": f"{username} ka password sach mein update ho gaya!"}), 200
    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": str(e)}), 500
