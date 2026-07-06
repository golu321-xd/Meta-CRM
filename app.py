from flask import Flask, request, jsonify
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

# ----------------------------------------------------
# MAIN HOME ROUTE
# ----------------------------------------------------
@app.route('/', methods=['GET'])
def home():
    return jsonify({"message": "Meta CRM Backend is live on Render! 24/7 Active."})

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
    username = data.get('username')
    password = data.get('password')
    
    try:
        response = supabase.table('users').select('*').eq('username', username).execute()
        if len(response.data) > 0 and response.data[0]['password'] == password:
            return jsonify({"message": "Login successful", "user": response.data[0]}), 200
        else:
            return jsonify({"error": "Invalid username or password"}), 401
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ----------------------------------------------------
# 4. LEADS MANAGEMENT (Add & Get Leads)
# ----------------------------------------------------
@app.route('/api/leads', methods=['GET', 'POST'])
def manage_leads():
    if request.method == 'POST':
        # Naya lead add karna
        data = request.json
        try:
            supabase.table('leads').insert(data).execute()
            return jsonify({"message": "Lead added successfully!"}), 201
        except Exception as e:
            return jsonify({"error": str(e)}), 500
            
    elif request.method == 'GET':
        # Database se leads fetch karna
        owner = request.args.get('owner')
        try:
            if owner and owner != 'admin':
                # Sirf us user ke leads dikhao jo login hai
                response = supabase.table('leads').select('*').eq('owner', owner).execute()
            else:
                # Agar admin hai toh sabke leads dikhao
                response = supabase.table('leads').select('*').execute()
            return jsonify(response.data), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 500

# ----------------------------------------------------
# 5. UPDATE LEAD (Won, Lost, Edit)
# ----------------------------------------------------
@app.route('/api/leads/<lead_id>', methods=['PUT'])
def update_lead(lead_id):
    data = request.json
    try:
        supabase.table('leads').update(data).eq('id', lead_id).execute()
        return jsonify({"message": "Lead updated successfully!"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
