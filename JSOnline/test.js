class Cache {
    constructor() {
        this.store = new Map();
    }

    set(key, val, duration) {
        this.store.set(key, { value: val, expiry: Date.now() + duration });
        setTimeout(() => this.store.delete(key), duration);
    }

    get(key) {
        const entry = this.store.get(key);
        if (!entry || Date.now() > entry.expiry) {
            this.store.delete(key);
            return null;
        }
        return entry.value;
    }

    count() {
        return this.store.size;
    }
}

// Example Usage:
const cache = new Cache();
cache.set("name", "Pranay", 5000);
console.log(cache.get("name")); 
setTimeout(() => console.log(cache.get("name")), 6000); 
console.log(cache.count()); 
