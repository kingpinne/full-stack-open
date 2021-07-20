const Notification = ({ message, type }) => {
    if (message.message === null) {
      return null
    }

    if (message.type === 'success') {
        return(
        <div className="success">
        {message.message}
      </div>)

    } else {
        return (
          <div className="error">
            {message.message}
          </div>
        )
    }
  }

  export default Notification