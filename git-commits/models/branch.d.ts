export interface Branch {
    name: string
    commit: CommitMeta
    protected: boolean
}

export interface CommitMeta {
    sha: string
    url: string
}
