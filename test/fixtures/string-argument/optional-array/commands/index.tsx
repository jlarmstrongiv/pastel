import React from 'react';
import {Text} from 'ink';
import zod from 'zod';

export const args = zod.array(zod.string()).optional().describe('traits');

type Props = {
	readonly args: zod.infer<typeof args>;
};

export default function Index({args}: Props) {
	return <Text>Arguments = {args?.join(', ') ?? ''}</Text>;
}
