import "./widget.scss";
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import feesAndChargesImage from "../../images/dollar.png";

const Widget = ({ type }) => {

  const requestLoanstyle = {
    color :'#FF3366',
    fontSize :'18px',
    width : '15%',
    height : '20%',
    backgroundColor: "rgba(255, 0, 0, 0.2)",
    borderRadius  : "3px"
 }

  let data;
switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: true,
        total: '2,453',
        link: "See all users",
        icon: (
          <PeopleIcon
            className="icon"
           
          />
        ),
      };
      break;
      case "useractive":
        data = {
          title: "ACTIVE USERS",
          isMoney: true,
          total: '2,453',
          link: "See all users",
          icon: (
            <GroupsIcon
              className="icon"
              style={{
                color: "#5718FF",
                backgroundColor : "whitesmoke"
              }}
            />
          ),
        };
        break;
        case "userwithloans":
          data = {
            title: "USERS WITH LOANS",
            total: '12,453',
            isMoney: true,
            link: "See all users",
            icon: (
              <img src={feesAndChargesImage} alt="" style={requestLoanstyle} />
              
            ),
          };
          break;
          case "userwithsavings":
            data = {
              title: "USERS WITH SAVINGS",
              total: '102,453',
              isMoney: true,
              link: "See all users",
              icon: (
                <img src={feesAndChargesImage} alt="" style={requestLoanstyle} className="userSavings"/>
              ),
            };
            break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
       {data.icon}
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && data.total}
        </span>
        <span className="link">{data.link}</span>
      </div>
    </div>
  );
};

export default Widget;
