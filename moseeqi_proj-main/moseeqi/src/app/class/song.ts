class song{

    private static instance_variable: any;
    public title : String;
    public description: String;
    public cover_img: HTMLImageElement;

    private constructor() {
        // this.loggedin_username = username;
    }

    public static GetInstance() {
        if (song.instance_variable == null) {
            this.instance_variable = new song();
        }

        return this.instance_variable;

        
    }

    public get_title() {
        return this.title;
    }

    public set_title(title:string) {
        this.title = title;
    }

    public get_Desc() {
        return this.description;
    }

    public set_Desc(description: string) {
        this.description = description;
    }
    public get_img() {
        return this.cover_img;
    }

    public set_img(cover_img: HTMLImageElement) {
        this.cover_img = cover_img;
    }

}

export {song};

