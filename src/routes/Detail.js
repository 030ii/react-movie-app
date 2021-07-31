import React from "react";

// function Detail(props) {
//   console.log(props);
//   return <span>asdf</span>;
// }

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props; // 컴포넌트가 마운트 되면
    if (location.state === undefined) {
      history.push("/"); // 받아온 state값이 없을 경우 home으로 이동
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null; // 에러없이 componentDidMount() 실행
    }
  }
}

export default Detail;
