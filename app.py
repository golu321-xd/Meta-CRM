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
