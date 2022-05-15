export interface Win extends Window{
    __PSZYSET__?: true
}

export interface CustomHTMLSpanElement extends HTMLSpanElement{
    attributes: attr
}

export interface CustomElement extends Element{
    offsetHeight: number
}

interface attr extends NamedNodeMap{
    cls:value,
    spn: value
}

interface value{
    value?:number
}