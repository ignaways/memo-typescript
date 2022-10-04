import * as Icon from "react-bootstrap-icons";

const ButtonIconStatus = ({ status }: { status: boolean }) => {
  console.log("🚀 ~ file: ButtonIconStatus.tsx ~ line 4 ~ ButtonIconStatus ~ status", status)
  return (
    <div style={{ display: "flex" }}>
      {/* <Icon.ClipboardCheckFill />
      <Icon.ExclamationDiamondFill /> */}
      {status ? (
        <>
          <Icon.HourglassSplit />
          <div style={{ fontSize: ".7em", marginLeft: ".5em" }}>
            On Progress
          </div>
        </>
      ) : (
        <>
          <Icon.ClipboardCheckFill />
          <div style={{ fontSize: ".7em", marginLeft: ".5em" }}>
            Done
          </div>
        </>
      )}
    </div>
  );
};

export default ButtonIconStatus;
