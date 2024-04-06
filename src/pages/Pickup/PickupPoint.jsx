import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const PickUpPoint = () => {
  const navigate = useNavigate();

  const onIconUserClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSpeechBubbleImageClick = useCallback(() => {
    navigate("/messages");
  }, [navigate]);

  const onFrameImageClick = useCallback(() => {
    navigate("/reminder");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onShapeIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBinayaGineshTextClick = useCallback(() => {
    navigate("/complaintrecv");
  }, [navigate]);

  const onVaishakhNairTextClick = useCallback(() => {
    navigate("/complaintrecv");
  }, [navigate]);

  const onVarunHaridasTextClick = useCallback(() => {
    navigate("/complaintrecv");
  }, [navigate]);

  const onSanthoshPanditTextClick = useCallback(() => {
    navigate("/complaintrecv");
  }, [navigate]);

  const onMiliMathewTextClick = useCallback(() => {
    navigate("/complaintrecv");
  }, [navigate]);

  const onRemyaVargheseTextClick = useCallback(() => {
    navigate("/complaintrecv");
  }, [navigate]);

  return (
    <div className="w-full relative bg-light-gray-0 h-[800px] overflow-hidden text-center text-base text-seagreen-200 font-plus-jakarta-sans">
      <div className="absolute top-[655px] left-[-95px] rounded-[50%] bg-fuchsia w-[543px] h-[543px] opacity-[0.2]" />
      <div className="absolute top-[714px] left-[-1px] rounded-6xl bg-light-gray-0 w-[360px] h-[83px] text-5xs text-light-gray-0 font-outfit">
        <img
          className="absolute top-[21px] left-[285.5px] w-[28.3px] h-[38px] object-cover cursor-pointer"
          alt=""
          src="/-icon-user@2x.png"
          onClick={onIconUserClick}
        />
        <img
          className="absolute h-[41.69%] w-[8.72%] top-[26.63%] right-[83.69%] bottom-[31.69%] left-[7.58%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
          alt=""
          src="/vector@2x.png"
          onClick={onVectorIconClick}
        />
        <img
          className="absolute top-[9px] left-[103.7px] w-[43.4px] h-[60px] object-cover cursor-pointer"
          alt=""
          src="/speech-bubble@2x.png"
          onClick={onSpeechBubbleImageClick}
        />
        <div className="absolute top-[13px] left-[137.6px] w-[12.3px] h-[13px]">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-darkslategray w-[12.3px] h-[13px]" />
          <b className="absolute top-[1px] left-[142.3px] inline-block w-[3.6px] h-[8.9px]">
            2
          </b>
        </div>
        <div className="absolute top-[29px] left-[116.9px] rounded-[50%] bg-gainsboro w-[17px] h-[18px]" />
        <img
          className="absolute top-[17px] left-[192.3px] w-[49px] h-[52px] object-cover cursor-pointer"
          alt=""
          src="/group-469395@2x.png"
          onClick={onFrameImageClick}
        />
      </div>
      <div className="absolute top-[-330px] left-[449px] rounded-[50%] bg-greenyellow-200 w-[543px] h-[543px] opacity-[0.2]" />
      <div
        className="absolute top-[44.6px] left-[19px] w-[27.8px] h-[35.4px] opacity-[0.65] mix-blend-normal cursor-pointer"
        onClick={onFrameContainer1Click}
      >
        <img
          className="absolute top-[0px] left-[3.4px] w-[21px] h-[19.9px] cursor-pointer"
          alt=""
          src="/shape.svg"
          onClick={onShapeIconClick}
        />
        <div className="absolute top-[4.4px] left-[0px] w-[27.8px] h-[31px]" />
      </div>
      <div className="absolute top-[14px] left-[25px] text-13xl font-medium text-seagreen-400 flex items-center justify-center w-[317px] h-[73px]">
        Requests
      </div>
      <img
        className="absolute top-[-360.5px] left-[807px] w-[543px] h-[543px] opacity-[0.2]"
        alt=""
        src="/ellipse-23.svg"
      />
      <div
        className="absolute top-[163px] left-[19px] leading-[37px] font-medium flex items-center justify-center w-[234px] h-[71px] cursor-pointer"
        onClick={onBinayaGineshTextClick}
      >
        Binaya Ginesh
      </div>
      <img
        className="absolute top-[252px] left-[16px] w-[60px] h-[60px] object-cover"
        alt=""
        src="/untitled-7@2x.png"
      />
      <div
        className="absolute top-[261px] left-[83px] leading-[37px] font-medium flex items-center justify-center w-[105px] h-10 cursor-pointer"
        onClick={onVaishakhNairTextClick}
      >
        Vaishakh Nair
      </div>
      <div
        className="absolute top-[342px] left-[83px] leading-[37px] font-medium flex items-center justify-center w-[105px] h-10 cursor-pointer"
        onClick={onVarunHaridasTextClick}
      >
        Varun Haridas
      </div>
      <img
        className="absolute top-[181px] left-[25px] w-9 h-[38px] object-cover"
        alt=""
        src="/untitled-7@2x.png"
      />
      <div className="absolute top-[177px] left-[22px] rounded-[50%] bg-gray-600 box-border w-[42px] h-[42px] border-[1px] border-solid border-seagreen-100" />
      <img
        className="absolute top-[595px] left-[30px] w-9 h-[38px] object-cover"
        alt=""
        src="/untitled-7@2x.png"
      />
      <div className="absolute top-[591px] left-[27px] rounded-[50%] bg-gray-600 box-border w-[42px] h-[42px] border-[1px] border-solid border-seagreen-100" />
      <div className="absolute top-[345px] left-[25px] rounded-[50%] bg-gray-600 box-border w-[42px] h-[42px] border-[1px] border-solid border-seagreen-100" />
      <img
        className="absolute top-[340px] left-[30px] w-8 h-[49px] object-cover"
        alt=""
        src="/tobio-kageyama@2x.png"
      />
      <img
        className="absolute top-[425px] left-[25px] w-[43px] h-[43px] object-cover"
        alt=""
        src="/untitled-7@2x.png"
      />
      <div
        className="absolute top-[425px] left-[-37px] leading-[37px] font-medium flex items-center justify-center w-[363px] h-[37px] cursor-pointer"
        onClick={onSanthoshPanditTextClick}
      >
        Santhosh Pandit
      </div>
      <img
        className="absolute top-[506px] left-[23px] w-[47px] h-[47px] object-cover"
        alt=""
        src="/untitled-7@2x.png"
      />
      <div
        className="absolute top-[498px] left-[-54px] leading-[37px] font-medium whitespace-pre-wrap flex items-center justify-center w-[363px] h-[55px] cursor-pointer"
        onClick={onMiliMathewTextClick}
      >{`Mili Mathew   `}</div>
      <div
        className="absolute top-[546px] left-[-22px] leading-[37px] font-medium whitespace-pre-wrap flex items-center justify-center w-[345px] h-[132px] cursor-pointer"
        onClick={onRemyaVargheseTextClick}
      >
        Remya Varghese
      </div>
    </div>
  );
};

export default PickUpPoint;
