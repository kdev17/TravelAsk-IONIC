import { ViewController } from "ionic-angular";

export class ModalCustom {
    constructor(public viewCtrl: ViewController) { 
    }

    dismiss(data?) {
        this.viewCtrl.dismiss(data);
    }
}