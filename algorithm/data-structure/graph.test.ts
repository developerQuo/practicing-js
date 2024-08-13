import { beforeEach, describe, expect, test } from '@jest/globals';
import { Graph } from './graph';

describe('graph', () => {
	let graph: Graph;

	beforeEach(() => {
		graph = new Graph();
	});

	test('add vertex', () => {
		graph.addVertex('Tokyo');

		expect(graph.adjacencyList).toEqual({ Tokyo: [] });

		graph.adjacencyList['Tokyo'].push('Seoul');
		graph.addVertex('Tokyo');

		expect(graph.adjacencyList).toEqual({ Tokyo: ['Seoul'] });
	});

	test('add edge', () => {
		graph.addVertex('Tokyo');
		graph.addVertex('Dallas');
		graph.addVertex('Aspen');

		graph.addEdge('Tokyo', 'Dallas');

		expect(graph.adjacencyList).toEqual({
			Tokyo: ['Dallas'],
			Dallas: ['Tokyo'],
			Aspen: [],
		});

		graph.addEdge('Aspen', 'Dallas');

		expect(graph.adjacencyList).toEqual({
			Tokyo: ['Dallas'],
			Dallas: ['Tokyo', 'Aspen'],
			Aspen: ['Dallas'],
		});
	});

	test('remove edge', () => {
		graph.addVertex('Tokyo');
		graph.addVertex('Dallas');
		graph.addVertex('Aspen');

		graph.addEdge('Tokyo', 'Dallas');
		graph.addEdge('Dallas', 'Aspen');

		graph.removeEdge('Tokyo', 'Dallas');

		expect(graph.adjacencyList).toEqual({
			Tokyo: [],
			Dallas: ['Aspen'],
			Aspen: ['Dallas'],
		});
	});

	test('remove vertex', () => {
		graph.addVertex('Tokyo');
		graph.addVertex('Dallas');
		graph.addVertex('Aspen');
		graph.addVertex('Hong Kong');
		graph.addVertex('Los Angeles');

		graph.addEdge('Tokyo', 'Dallas');
		graph.addEdge('Tokyo', 'Hong Kong');
		graph.addEdge('Dallas', 'Aspen');
		graph.addEdge('Dallas', 'Hong Kong');
		graph.addEdge('Dallas', 'Los Angeles');
		graph.addEdge('Hong Kong', 'Los Angeles');

		graph.removeVertex('Hong Kong');
		console.log(graph.adjacencyList);

		expect(graph.adjacencyList).toEqual({
			Tokyo: ['Dallas'],
			Dallas: ['Tokyo', 'Aspen', 'Los Angeles'],
			Aspen: ['Dallas'],
			'Los Angeles': ['Dallas'],
		});
	});
});
