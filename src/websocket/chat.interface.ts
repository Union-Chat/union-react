export interface SocketServer {
  id: number
  name: string
  owner: string
  iconUrl: string
  members: SocketMember[]
  messages: Map<any, any>
}

export interface SocketMember {
  id: string
  createdAt: number
  online: boolean
}

export interface SocketMemberAdd {
  server: number
  member: SocketMember
}

export interface SocketMessage {
  id: string
  server: number
  content: string
  author: string
  createdAt: number
}

export interface SocketPresence {
  id: string
  status: boolean
}

export interface SocketMemberLeave {
  user: string
  server: number
  kicked: boolean
}
