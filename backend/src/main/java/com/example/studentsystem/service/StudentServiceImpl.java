package com.example.studentsystem.service;

import com.example.studentsystem.exception.NoMemberException;
import com.example.studentsystem.model.Student;
import com.example.studentsystem.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student save(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public void delete(int id) {
        studentRepository.deleteById(id);
    }

    @Override
    public Student get(Integer id) {
        return studentRepository.findById(id).get();
    }

    @Override
    public void deleteAll() {
        List<Student> all = studentRepository.findAll();
        if (all.size() == 0) {
            throw new NoMemberException("Repo에 저장된 멤버가 없습니다.");
        }
        studentRepository.deleteAll();
    }
}
