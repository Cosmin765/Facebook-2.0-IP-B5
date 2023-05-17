package org.FacebookAds.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AdCompanyDto {
    private Integer id;
    private String name;
    private String description;
    private String profilePicture;
    private String coverPicture;
}
