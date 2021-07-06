import React from 'react';

const FbTregu = () => {
    return (
        <div className="container w-50 mx-auto">
            <form>
                <div className="form-group">
                    <label htmlFor="file">XLS File</label>
                    <input type="file" name="file" id="file" />
                </div>
                <button type="button" className="btn btn-primary butoni">Submit</button>
            </form>
        </div>
    )
}

export default FbTregu;