import React from 'react';
import {Text} from 'ink';
import zod from 'zod';
import {option} from '../../../../../source/index.js';

export const options = zod.object({
	size: zod
		.number()
		.default(128)
		.describe(
			option({
				description: 'Size',
				defaultValueDescription: '128 MB',
			}),
		),
});

type Props = {
	readonly options: zod.infer<typeof options>;
};

export default function Index({options}: Props) {
	return <Text>Size = {options.size}</Text>;
}
