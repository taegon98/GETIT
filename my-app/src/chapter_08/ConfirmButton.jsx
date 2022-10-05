import React from "react";
import { useState } from "react";

//함수 컴포넌트 이용
function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButton;




/* // 클래스 필드 문법을 사용
class ConfirmButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isConfirmed: false,
        };
    }
    handleConfirm = () => {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    }
    render() {
        return (
            <button
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmed}
            >
                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        );
    }
}
export default ConfirmButton; */



/* // bind()를 사용
class ConfirmButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isConfirmed: false,
        };
        this.handleConfirm = this.handleConfirm.bind(this);
    }
    handleConfirm() {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    }
    render() {
        return (
            <button
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmed}
            >
                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        );
    }
}
export default ConfirmButton; */