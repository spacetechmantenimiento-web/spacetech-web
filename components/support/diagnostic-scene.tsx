import styles from "./diagnostic.module.css";

export function DiagnosticScene() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <div className={styles.camera} data-diagnostic-camera>
        <svg viewBox="0 0 1000 760" className={styles.system}>
          <defs>
            <linearGradient id="diagnostic-shell" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#193d58" /><stop offset=".5" stopColor="#0d2437" /><stop offset="1" stopColor="#04111d" /></linearGradient>
            <linearGradient id="diagnostic-glass" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#0d3855" /><stop offset="1" stopColor="#081724" /></linearGradient>
            <linearGradient id="diagnostic-beam"><stop stopColor="#82deff" stopOpacity="0" /><stop offset="1" stopColor="#82deff" stopOpacity=".18" /></linearGradient>
            <radialGradient id="diagnostic-halo"><stop stopColor="#197eb2" stopOpacity=".22" /><stop offset="1" stopColor="#197eb2" stopOpacity="0" /></radialGradient>
            <clipPath id="diagnostic-screen"><rect x="207" y="147" width="586" height="337" rx="10" /></clipPath>
          </defs>
          <ellipse cx="510" cy="420" rx="440" ry="300" fill="url(#diagnostic-halo)" />
          <ellipse cx="500" cy="560" rx="370" ry="90" fill="none" stroke="#68badc" strokeOpacity=".16" transform="rotate(-8 500 560)" />
          <path d="M197 132H803Q820 132 820 150V499H180V150Q180 132 197 132Z" fill="url(#diagnostic-shell)" stroke="#89c5df" strokeOpacity=".65" strokeWidth="1.4" />
          <rect x="207" y="147" width="586" height="337" rx="10" fill="url(#diagnostic-glass)" stroke="#73bfdc" strokeOpacity=".22" />
          <circle cx="500" cy="140" r="2" fill="#9edff4" />
          <path d="M180 499H820L930 596Q940 609 917 617H83Q60 609 70 596Z" fill="url(#diagnostic-shell)" stroke="#8ac6de" strokeOpacity=".65" strokeWidth="1.5" />
          <path d="M211 520H789L844 566H156Z" fill="#071723" stroke="#61a8c3" strokeOpacity=".28" />
          {Array.from({ length: 4 }, (_, row) => <path key={row} d={`M${204 - row * 11} ${529 + row * 9}H${796 + row * 11}`} stroke="#5f9fbc" strokeOpacity=".21" />)}
          {Array.from({ length: 16 }, (_, column) => <path key={column} d={`M${231 + column * 35} 522l${(column - 8) * 1.2} 42`} stroke="#5f9fbc" strokeOpacity=".19" />)}
          <path d="M439 579H561L578 597H422Z" fill="#0c2434" stroke="#86cce5" strokeOpacity=".28" />
          <path d="M83 617H917L896 627H104Z" fill="#06131f" stroke="#7bb4ce" strokeOpacity=".25" />
          <g className={styles.screenSymbol}><path d="M452 268h96v96h-96z" fill="#0b2b40" stroke="#76c7e8" strokeWidth="1.5" /><path d="M479 294h42v42h-42zM500 248v20m0 96v20m-68-68h20m96 0h20" fill="none" stroke="#91d9f4" strokeOpacity=".7" /></g>
          <g className={styles.hardware} data-diagnostic-layers>
            <g className={styles.zoneRam}><rect x="290" y="215" width="54" height="140" rx="5" /><path d="M303 230h28v25h-28zm0 37h28v25h-28zm0 37h28v25h-28z" /></g>
            <g className={styles.zoneSsd}><rect x="625" y="218" width="110" height="54" rx="5" /><path d="M635 229h42v30h-42zm55 0h30v30h-30z" /></g>
            <g className={styles.zoneCooling}><circle cx="671" cy="393" r="43" /><circle cx="671" cy="393" r="10" /><path d="M671 383q-40-29-23-41m33 51q29-40 41-23m-51 33q40 29 23 41m-33-51q-29 40-41 23" /></g>
            <g className={styles.zoneSystem}><path d="M403 385h149v25H403zm12 37h125v20H415z" /></g>
            <g className={styles.zoneHardware}><path d="M381 189h187v165H381Z" strokeDasharray="4 8" /></g>
          </g>
          <g className={styles.routes} data-diagnostic-routes><path d="M344 286H383V316H452M548 316h75v-70M500 364v33h128M500 364v21M344 355v94h327v-13" /></g>
          <g clipPath="url(#diagnostic-screen)"><g className={styles.scanGroup} data-diagnostic-scan><rect x="155" y="145" width="82" height="343" fill="url(#diagnostic-beam)" /><path d="M238 146v339" stroke="#91e4ff" strokeWidth="2" /></g></g>
          <g className={styles.callouts} data-diagnostic-callouts>
            <path d="M310 214V112H176M683 218V100h146M714 394h161v56M415 422H297v43M475 190v-90" />
            <text x="115" y="111">RAM</text><text x="837" y="105">SSD</text><text x="875" y="474" textAnchor="end">REFRIGERACIÓN</text><text x="217" y="486">SISTEMA</text><text x="418" y="81">HARDWARE</text>
            {[[310,214],[683,218],[714,394],[415,422],[475,190]].map(([cx,cy]) => <circle key={cx} cx={cx} cy={cy} r="5" />)}
          </g>
          <g className={styles.solution} data-diagnostic-solution><path d="M467 311l23 23 45-47" /><circle cx="500" cy="315" r="64" /></g>
          <g className={styles.bridge} data-diagnostic-bridge><path d="M145 577L0 700M500 626v134M855 577l145 123" /></g>
        </svg>
      </div>
    </div>
  );
}
