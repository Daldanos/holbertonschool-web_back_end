#!/usr/bin/env python3
"""Change school topics"""

def update_topics(mongo_collection, name, topics):
    """Change school topics"""
    mongo_collection.update({"name": name}, {"$set": {"topics": topics}})
