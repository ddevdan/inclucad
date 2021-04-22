db.auth('uab_user', 'uab_pass')

db = db.getSiblingDB('analytics_uab')

db.createUser(
    {
        user: "uab_user",
        pwd: "uab_pass",
        roles: [
            {
                role: "root",
                db: "admin"
            }
        ]
    }
);