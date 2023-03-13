import React from "react";

const Music = ({ queryResult }) => {
  const tracks = queryResult?.tracks;
  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="py-3 pl-2"></div>
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-x-auto  rounded-lg">
              <table className="min-w-full  divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      #
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      TITLE
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      ARTIST
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      TIME
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      ALBUM
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {queryResult && tracks && tracks.items.length > 0
                    ? queryResult.tracks.items.map((item, index) => (
                        <tr
                          key={item.id}
                          className="hover:bg-white hover:shadow-sm cursor-pointer"
                        >
                          <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                            {item.track_number}
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                            {item.name}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {item.artists
                              .map((artist) => artist.name)
                              .join(" ft ")}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {`${
                              (item.duration_ms / 60000)
                                .toFixed(2)
                                .split(".")[0]
                            } min`}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {item.album.album_type}
                          </td>
                        </tr>
                      ))
                    : ""}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;

//https://soundcloud.com/roughstatemusic/galactixx-ft-stef-classens-take-me-out-now?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing
