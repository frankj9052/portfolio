import FrankAvatar from "./FrankAvatar";

export type UserListItemProps = {
    user?: {
        name?: string,
        image?: string,
        email?: string,
    }
}

export function UserListItem(
    {
        user
    }: UserListItemProps) {
    return (
        <div className="flex gap-2 items-center w-full">
            <FrankAvatar alt={user?.name} className="flex-shrink-0" size="sm" src={user?.image} />
            <div className="flex flex-col">
                <span className="text-small">{user?.name}</span>
                <span className="text-tiny text-default-400">{user?.email}</span>
            </div>
        </div>
    )
}

export default UserListItem;
