import { MiniProgram } from "./MiniProgram";
import { TemplateItem } from "./TemplateItem";

export class TemplateData {
    private touser!: string;
    private template_id!: string;
    private url!: string;
    private miniprogram!: MiniProgram;
    private data!: Map<string, TemplateItem>;

    public New(): TemplateData {
        this.data = new Map<string, TemplateItem>();
        this.miniprogram = new MiniProgram();
        return this;
    }

    public get getToUser(): string {
        return this.touser;
    }

    public setToUser(touser: string): TemplateData {
        this.touser = touser;
        return this;
    }

    public get getTemplateId(): string {
        return this.template_id;
    }

    public setTemplateId(templateId: string): TemplateData {
        this.template_id = templateId;
        return this;
    }

    public get getTemplateUrl(): string {
        return this.url;
    }

    public setTemplateUrl(url: string): TemplateData {
        this.url = url;
        return this;
    }

    public get getMiniProgram(): MiniProgram {
        return this.miniprogram;
    }

    public setMiniProgram(miniprogram: MiniProgram): TemplateData {
        this.miniprogram = miniprogram;
        return this;
    }

    public add(key: string, value: string, color: string): TemplateData {
        this.data.set(key, new TemplateItem(value, color));
        return this;
    }

    public build(): string {
        let temp = {
            "touser": this.touser,
            "template_id": this.template_id,
            "url": this.url,
            "miniprogram": this.miniprogram,
            "data": this._mapToObj(this.data)
        }
        return JSON.stringify(temp);
    }

    _mapToObj(map: Map<any, any>) {
        let obj = Object.create(null);
        for (let [k, v] of map) {
            obj[k] = v;
        }
        return obj;
    }

    _objToMap(obj) {
        let strMap = new Map();
        for (let k of Object.keys(obj)) {
            strMap.set(k, obj[k]);
        }
        return strMap;
    }
}