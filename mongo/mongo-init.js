db.auth('inclucad_user', 'WVhb!Xf8c*Z4eJ4d')

db = db.getSiblingDB('inclucad')

db.createUser(
    {
        user: "inclucad_user",
        pwd: "WVhb!Xf8c*Z4eJ4d",
        roles: [
            {
                role: "root",
                db: "admin"
            }
        ]
    }
);