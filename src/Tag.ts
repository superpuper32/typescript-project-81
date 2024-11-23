interface IAttributes {
    [index: string]: string;
}
interface ITag {
    toString: () => string;
}

class Tag implements ITag {
    tag: string;
    attributes: string;
    value: string;

    constructor(tag: string);
    constructor(tag: string, attributes: IAttributes);
    constructor(tag: string, attributes: IAttributes = {}, value: string = '') {

        this.tag = tag;
        this.attributes = Object.entries(attributes).map(([key, value]) => `${key}="${value}"`).join(' ');;
        this.value = value;
    }

    toString() {
        if (this.attributes !== '') {
            return `<${this.tag} ${this.attributes}>`;
        }
        if (this.value) {
            return `<${this.tag}>${this.value}</${this.tag}>`;
        }
        return `<${this.tag}>`;
    }
}

export default Tag;
