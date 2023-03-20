import { Component } from 'react';

class Button extends Component {
    shouldComponentUpdate(nextProps) {
        const { change: currentChange, locale: currentLocale } = this.props;
        const { change: nextChange, locale: nextLocale } = nextProps;

        return !(currentChange === nextChange && currentLocale === nextLocale);
    }

    render() {
        const { change, locale } = this.props;
        return (
            <button onClick={() => change(locale)} type="button" className="btn">
                {locale === 'en-US' ? 'ঘড়ি বদলান' : 'Change clock'}
            </button>
        );
    }
}

export default Button;
