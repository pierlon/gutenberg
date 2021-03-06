/**
 * WordPress dependencies
 */
import { withInstanceId } from '@wordpress/compose';

/**
 * Internal dependencies
 */
import BaseControl from '../base-control';
import Dashicon from '../dashicon';

function CheckboxControl( { label, className, heading, checked, help, instanceId, onChange, ...props } ) {
	const id = `inspector-checkbox-control-${ instanceId }`;
	const onChangeValue = ( event ) => onChange( event.target.checked );

	return (
		<BaseControl label={ heading } id={ id } help={ help } className={ className }>
			<input
				id={ id }
				className="components-checkbox-control__input"
				type="checkbox"
				value="1"
				onChange={ onChangeValue }
				checked={ checked }
				aria-describedby={ !! help ? id + '__help' : undefined }
				{ ...props }
			/>
			<label className="components-checkbox-control__label" htmlFor={ id }>
				{ checked ? <Dashicon icon="yes" className="components-checkbox-control__checked" role="presentation" /> : null }
				{ label }
			</label>
		</BaseControl>
	);
}

export default withInstanceId( CheckboxControl );
