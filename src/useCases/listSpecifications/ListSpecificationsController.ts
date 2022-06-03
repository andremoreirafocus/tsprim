import SpecificationsMemoryRepository from "../../modules/cars/repositories/SpecificationsMemoryRepository";
import ListSpecificationsUseCase from "./ListSpecificationsUseCase";
import ListSpecificationsHandler from "./ListSpecificationsHandler";

const specificationsRepository = SpecificationsMemoryRepository.getInstance();
const listSpecificationsUseCase = new ListSpecificationsUseCase(
  specificationsRepository
);
const listSpecificationsHandler = new ListSpecificationsHandler(
  listSpecificationsUseCase
);

export default listSpecificationsHandler;
