
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
 
@ccclass('SceneLobby')
export class SceneLobby extends Component {
    
    onBtnClick() {
        console.log('hello world');
    }
}