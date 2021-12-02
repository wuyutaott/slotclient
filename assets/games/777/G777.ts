
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
 
@ccclass('G777')
export class G777 extends Component {
    onBtnSpin() {
        console.log('spin');
    }
}
