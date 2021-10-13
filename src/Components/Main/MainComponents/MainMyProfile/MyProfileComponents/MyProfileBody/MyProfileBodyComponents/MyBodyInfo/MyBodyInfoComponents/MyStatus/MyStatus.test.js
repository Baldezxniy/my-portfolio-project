import React from 'react';
import MyStatusHookCompomponent from './MyStatus.jsx';
import {create} from 'react-test-renderer';

describe('My Status Component', ()=>{
	test('status from props', ()=>{
		const component = create(<MyStatusHookCompomponent status={'хуй пизда'} wqe='qwe'/>);
		const instance = component.getInstance();
		debugger
		console.log(instance.props.status)
		debugger
		expect(instance.status).toBe('хуй пизда');
	})
})