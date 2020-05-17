declare module 'react-inview-monitor' {
  function InViewMonitor(
    children?: any,
    classNameNotInView?: string,
    classNameInView?: string,
    classNameAboveView?: string,
    intoViewMargin?: string,
    onInView?: function,
    onNotInView?: function
  ): any
  export default InViewMonitor
}
