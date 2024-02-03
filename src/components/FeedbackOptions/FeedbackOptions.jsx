import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttons}>
      <button
        className={css.button}
        name="good"
        onClick={() => onLeaveFeedback(options.good)}
      >
        Good
      </button>
      <button
        className={css.button}
        name="neutral"
        onClick={() => onLeaveFeedback(options.neutral)}
      >
        Neutral
      </button>
      <button
        className={css.button}
        name="bad"
        onClick={() => onLeaveFeedback(options.bad)}
      >
        Bad
      </button>
    </div>
  );
};
