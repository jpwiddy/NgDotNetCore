export class PageContext {
    private _context: any;
    id: string;
    title: string;
    active: boolean;
    children: Array<PageContext>;
    
    fullRoute: string;
    isChild: boolean;
    
    // Custom getter / setter
    get context(): any {
        return this._context;
    }
    set context(newContext: any) {
        if (!this.id && newContext.id) {
            this.id = newContext.id;
            // TODO: FETCH NEW DATA?
        }
        this.title = newContext.title;
        this._context = newContext;
    }

    constructor(pageContext: any = { title: 'Bad Data' }, children: Array<PageContext> = [], active: boolean = false) {
        this.id = '';
        this.context = pageContext;

        this.children = children;
        this.isChild = false;
        this.active = active;
    }
}
