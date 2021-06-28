import Image from 'next/image'
function SidebarRow({src, Icon, title}) {
    return (
        <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
            {src &&(
                <Image src={src}
                    height={30}
                    width={30}
                    layout="fixed"
                    className="rounded-full"
                />
            )}
            {Icon &&(
                <Icon className="h-8 w-8 text-blue-500"/>
            )}
            <p className="hidden md:inline-flex font-medium ml-5">{title}</p>
        </div>
    )
}

export default SidebarRow
