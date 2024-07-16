import { useRef, useState, useEffect, useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import { setBodySize } from "@/context/actions";

const useBodySize = () => {
  const bodyRef = useRef(null);
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    const handleResize = () => {
      if (bodyRef.current) {
        dispatch(
          setBodySize({
            width: bodyRef.current.clientWidth,
            height: bodyRef.current.clientHeight,
          })
        );
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [bodyRef]);

  return { bodySize: state.bodySize, bodyRef };
};

export default useBodySize;
