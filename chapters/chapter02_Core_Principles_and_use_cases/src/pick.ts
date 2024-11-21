type ButtonProps = Pick<HTMLAttributes<HTMLButtonElement>, 'onClick' | 'onSubmit' | 'className' | 'onFocus'>;

class LoggingButton extends React.Component<ButtonProps> {
  handleClick = () => {
    console.log("Button clicked!");
    // Perform other click-related logic
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted!");
    // Handle form submission logic
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        onSubmit={this.handleSubmit}
        className={this.props.className}
        onFocus={() => console.log("Button focused!")}
      >
        Click Me
      </button>
    );
  }
}