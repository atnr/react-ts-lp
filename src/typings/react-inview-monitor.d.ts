declare module 'react-inview-monitor' {
  function InViewMonitor(
    children?: any,
    classNameNotInView?: string,
    classNameInView?: string,
    classNameAboveView?: string,
    intoViewMargin?: string,
    onInView?: function,
    onNotInView?: function
  ): JSX.Element
  export default InViewMonitor
}
