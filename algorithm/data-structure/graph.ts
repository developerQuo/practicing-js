export class Graph {
	adjacencyList: Record<string, string[]>;

	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex: string) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}

	addEdge(_vertex1: string, _vertex2: string) {
		const vertex1 = this.adjacencyList[_vertex1],
			vertex2 = this.adjacencyList[_vertex2];

		if (vertex1 && vertex2) {
			!vertex1.includes(_vertex2) && vertex1.push(_vertex2);
			!vertex2.includes(_vertex1) && vertex2.push(_vertex1);
		}
	}

	removeEdge(_vertex1: string, _vertex2: string) {
		const vertex1 = this.adjacencyList[_vertex1],
			vertex2 = this.adjacencyList[_vertex2];

		if (vertex1 && vertex2) {
			vertex1.includes(_vertex2) &&
				vertex1.splice(vertex1.indexOf(_vertex2), 1);
			vertex2.includes(_vertex1) &&
				vertex2.splice(vertex2.indexOf(_vertex1), 1);
		}
	}

	removeVertex(vertex: string) {
		console.log(this.adjacencyList);
		if (vertex) {
			// 관련 edge 전부 삭제
			[...this.adjacencyList[vertex]].forEach((vertex2) => {
				this.removeEdge(vertex, vertex2);
			});

			// vertex 삭제
			delete this.adjacencyList[vertex];
		}
	}
}
