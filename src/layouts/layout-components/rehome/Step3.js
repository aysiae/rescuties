import React, { Component } from 'react';

export default class Step4 extends Component {
	constructor(props) {
		super(props);

		this.state = {
			savedToCloud: props.getStore().savedToCloud
		};
	}

	render() {
		return (
			<div className="step step4 mt-5">
				<div className="row justify-content-md-center">
					<div className="col-lg-8">
						<form id="Form" className="form-horizontal">
							<div className="form-group">
								<label className="col-md-12 control-label">
									{
										(this.state.savedToCloud)
											?
											<div>
												<h1>Thanks!</h1>
												<h2>Please press save to submit your request</h2>
											</div>
											:
											<div>
												<h1>Thanks</h1>
												<h2>Please press save to submit your request</h2>
												<span className="btn btn-info text-white" onClick={() => { this.props.jumpToStep(4) }}>Save</span>
											</div>

									}
								</label>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}
