def WeightedPath(strArr=[]):
    # using Dijkstra algorithm
    # code goes here
    # ///////////////////
    # create graph
    # //////////////////
    graph = {}
    for i in range(0, int(strArr.pop(0))):
        graph[strArr[0]] = []
        strArr.pop(0)
    nodes = []
    worstPath = 0
    for edge in strArr:
        edge = edge.split('|')
        graph[edge[0]].append((edge[1], int(edge[2])))
        graph[edge[1]].append((edge[0], int(edge[2])))
        worstPath += int(edge[2])
    nodes = list(graph.keys())
    # ////////////////////

    # create Dijkstra Table
    dijkstraTable = {}
    for i, node in enumerate(graph):
        dijkstraTable[node] = (worstPath*2 if i != 0 else 0, None)
    # ///////////////////////

    # Dijkstra Table construction
    visitedNodes = []
    unVisitedNodes = list(dijkstraTable.keys())

    while len(unVisitedNodes) > 0:
        currentNode = unVisitedNodes.pop(0)
        unVisistedNodeNeigbors = filter(
            lambda vertix: False if vertix[0] in visitedNodes else True, graph[currentNode])
        for (vertix, distance) in unVisistedNodeNeigbors:
            newDistance = dijkstraTable[currentNode][0] + distance
            if newDistance < dijkstraTable[vertix][0]:
                dijkstraTable[vertix] = (newDistance, currentNode)
    # //////////////////////////

    # get shorted path
    startNode, endNode = (nodes[0], nodes[len(nodes)-1])
    shortestPath = []
    while startNode not in shortestPath:
        shortestPath.insert(0, endNode)
        endNode = dijkstraTable[endNode][1]

    return '-'.join(shortestPath)


# keep this function call here
print(WeightedPath(input()))
