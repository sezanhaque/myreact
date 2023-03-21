/* eslint-disable no-useless-constructor */
import Emoji from './Emoji';

export default class Text extends Emoji {
    constructor(props) {
        super(props);
    }

    render() {
        const decoratedText = this.addEmoji('i am javascript', '😅');
        return super.render(decoratedText);
    }
}
