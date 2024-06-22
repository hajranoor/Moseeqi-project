class logged_in_user{

    private static instance_variable: any;
    public loggedin_username: String;
    public loggedin_id: Number;
    public loggedin_subs: String;
    public loggedin_category: String
    static loggedin_id: any;

    static loggedin_category: any;

    private constructor() {
        // this.loggedin_username = username;
    }

    public static GetInstance() {
        if (logged_in_user.instance_variable == null) {
            this.instance_variable = new logged_in_user();
        }

        return this.instance_variable;

        
    }

    public getUsername() {
        return this.loggedin_username;
    }

    public setUsername(username:string) {
        this.loggedin_username = username;
    }

    public getid() {
        return this.loggedin_id;
    }

    public setid(id: Number) {
        this.loggedin_id = id;
    }
 }

export {logged_in_user};

