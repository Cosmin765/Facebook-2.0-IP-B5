package org.Facebook.mapper;

import org.Facebook.model.dto.CommentReportDto;
import org.Facebook.model.entity.CommentReport;


public class CommentReportMapper {
    public static CommentReportDto toDto(CommentReport commentReport) {
        return CommentReportDto.builder()
                .id(commentReport.getId())
                .comment(CommentMapper.toDto(commentReport.getComment()))
                .user(UserMapper.toDto(commentReport.getUser()))
                .build();
    }

    public static CommentReport toDto(CommentReportDto commentReport) {
        return CommentReport.builder()
                .id(commentReport.getId())
                .comment(CommentMapper.fromDto(commentReport.getComment()))
                .user(UserMapper.fromDto(commentReport.getUser()))
                .build();
    }
}
