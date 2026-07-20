type ProgressBarProps = {
  label: string;
  value: number;
};

export function ProgressBar({ label, value }: ProgressBarProps) {
  const safeValue = Math.min(100, Math.max(0, value));

  return (
    <div className="progress-block">
      <div className="progress-label">
        <span>{label}</span>
        <span>{safeValue}%</span>
      </div>
      <div
        className="progress-track"
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={safeValue}
      >
        <span className="progress-value" style={{ width: `${safeValue}%` }} />
      </div>
    </div>
  );
}
