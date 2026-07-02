export function Preloader() {
  return (
    <div className="preloader" id="preloader" aria-hidden="true">
      <div className="preloader__inner">
        <span className="preloader__word">B</span>
        <span className="preloader__word">L</span>
        <span className="preloader__word">E</span>
        <span className="preloader__word">U</span>
        <span className="preloader__word">M</span>
        <span className="preloader__word">O</span>
        <span className="preloader__word">N</span>
      </div>
      <div className="preloader__bar"><span id="preloaderBar"></span></div>
    </div>
  )
}
