#!/usr/bin/env python3

"""
Log stats

Script to retrieve and print statistics about Nginx logs stored in MongoDB.
"""

from pymongo import MongoClient

def log_stats():
    """
    Connects to MongoDB, retrieves statistics about Nginx logs, and prints them.

    - Connects to 'logs' database and 'nginx' collection.
    - Prints total number of logs.
    - Prints count of each HTTP method ('GET', 'POST', 'PUT', 'PATCH', 'DELETE').
    - Prints count of logs where method is 'GET' and path is '/status'.
    """
    # DB Connect
    client = MongoClient('localhost', 27017)
    db = client.logs
    collection = db.nginx

    # Count
    total_logs = collection.count_documents({})
    print(f"{total_logs} logs")

    # Count 2
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    print("Methods:")
    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    # Count3
    status_check = collection.count_documents({"method": "GET", "path": "/status"})
    print(f"{status_check} status check")

if __name__ == "__main__":
    log_stats()
