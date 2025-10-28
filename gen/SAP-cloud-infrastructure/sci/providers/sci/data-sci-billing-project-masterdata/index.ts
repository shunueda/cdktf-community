// https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/data-sources/billing_project_masterdata
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSciBillingProjectMasterdataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/data-sources/billing_project_masterdata#id DataSciBillingProjectMasterdata#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/data-sources/billing_project_masterdata#project_id DataSciBillingProjectMasterdata#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/data-sources/billing_project_masterdata#region DataSciBillingProjectMasterdata#region}
  */
  readonly region?: string;
}
export interface DataSciBillingProjectMasterdataCostObject {
}

export function dataSciBillingProjectMasterdataCostObjectToTerraform(struct?: DataSciBillingProjectMasterdataCostObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSciBillingProjectMasterdataCostObjectToHclTerraform(struct?: DataSciBillingProjectMasterdataCostObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSciBillingProjectMasterdataCostObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSciBillingProjectMasterdataCostObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSciBillingProjectMasterdataCostObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inherited - computed: true, optional: false, required: false
  public get inherited() {
    return this.getBooleanAttribute('inherited');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSciBillingProjectMasterdataCostObjectList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSciBillingProjectMasterdataCostObjectOutputReference {
    return new DataSciBillingProjectMasterdataCostObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSciBillingProjectMasterdataExtCertification {
}

export function dataSciBillingProjectMasterdataExtCertificationToTerraform(struct?: DataSciBillingProjectMasterdataExtCertification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSciBillingProjectMasterdataExtCertificationToHclTerraform(struct?: DataSciBillingProjectMasterdataExtCertification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSciBillingProjectMasterdataExtCertificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSciBillingProjectMasterdataExtCertification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSciBillingProjectMasterdataExtCertification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // c5 - computed: true, optional: false, required: false
  public get c5() {
    return this.getBooleanAttribute('c5');
  }

  // iso - computed: true, optional: false, required: false
  public get iso() {
    return this.getBooleanAttribute('iso');
  }

  // pci - computed: true, optional: false, required: false
  public get pci() {
    return this.getBooleanAttribute('pci');
  }

  // soc1 - computed: true, optional: false, required: false
  public get soc1() {
    return this.getBooleanAttribute('soc1');
  }

  // soc2 - computed: true, optional: false, required: false
  public get soc2() {
    return this.getBooleanAttribute('soc2');
  }

  // sox - computed: true, optional: false, required: false
  public get sox() {
    return this.getBooleanAttribute('sox');
  }
}

export class DataSciBillingProjectMasterdataExtCertificationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSciBillingProjectMasterdataExtCertificationOutputReference {
    return new DataSciBillingProjectMasterdataExtCertificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/data-sources/billing_project_masterdata sci_billing_project_masterdata}
*/
export class DataSciBillingProjectMasterdata extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sci_billing_project_masterdata";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSciBillingProjectMasterdata resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSciBillingProjectMasterdata to import
  * @param importFromId The id of the existing DataSciBillingProjectMasterdata that should be imported. Refer to the {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/data-sources/billing_project_masterdata#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSciBillingProjectMasterdata to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sci_billing_project_masterdata", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/data-sources/billing_project_masterdata sci_billing_project_masterdata} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSciBillingProjectMasterdataConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSciBillingProjectMasterdataConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sci_billing_project_masterdata',
      terraformGeneratorMetadata: {
        providerName: 'sci',
        providerVersion: '2.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._projectId = config.projectId;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_information - computed: true, optional: false, required: false
  public get additionalInformation() {
    return this.getStringAttribute('additional_information');
  }

  // business_criticality - computed: true, optional: false, required: false
  public get businessCriticality() {
    return this.getStringAttribute('business_criticality');
  }

  // changed_at - computed: true, optional: false, required: false
  public get changedAt() {
    return this.getStringAttribute('changed_at');
  }

  // changed_by - computed: true, optional: false, required: false
  public get changedBy() {
    return this.getStringAttribute('changed_by');
  }

  // collector - computed: true, optional: false, required: false
  public get collector() {
    return this.getStringAttribute('collector');
  }

  // contains_external_customer_data - computed: true, optional: false, required: false
  public get containsExternalCustomerData() {
    return this.getBooleanAttribute('contains_external_customer_data');
  }

  // contains_pii_dpp_hr - computed: true, optional: false, required: false
  public get containsPiiDppHr() {
    return this.getBooleanAttribute('contains_pii_dpp_hr');
  }

  // cost_object - computed: true, optional: false, required: false
  private _costObject = new DataSciBillingProjectMasterdataCostObjectList(this, "cost_object", false);
  public get costObject() {
    return this._costObject;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
  }

  // ext_certification - computed: true, optional: false, required: false
  private _extCertification = new DataSciBillingProjectMasterdataExtCertificationList(this, "ext_certification", false);
  public get extCertification() {
    return this._extCertification;
  }

  // gpu_enabled - computed: true, optional: false, required: false
  public get gpuEnabled() {
    return this.getBooleanAttribute('gpu_enabled');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_complete - computed: true, optional: false, required: false
  public get isComplete() {
    return this.getBooleanAttribute('is_complete');
  }

  // missing_attributes - computed: true, optional: false, required: false
  public get missingAttributes() {
    return this.getStringAttribute('missing_attributes');
  }

  // number_of_endusers - computed: true, optional: false, required: false
  public get numberOfEndusers() {
    return this.getNumberAttribute('number_of_endusers');
  }

  // parent_id - computed: true, optional: false, required: false
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // project_type - computed: true, optional: false, required: false
  public get projectType() {
    return this.getStringAttribute('project_type');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // responsible_infrastructure_coordinator_email - computed: true, optional: false, required: false
  public get responsibleInfrastructureCoordinatorEmail() {
    return this.getStringAttribute('responsible_infrastructure_coordinator_email');
  }

  // responsible_infrastructure_coordinator_id - computed: true, optional: false, required: false
  public get responsibleInfrastructureCoordinatorId() {
    return this.getStringAttribute('responsible_infrastructure_coordinator_id');
  }

  // responsible_inventory_role_email - computed: true, optional: false, required: false
  public get responsibleInventoryRoleEmail() {
    return this.getStringAttribute('responsible_inventory_role_email');
  }

  // responsible_inventory_role_id - computed: true, optional: false, required: false
  public get responsibleInventoryRoleId() {
    return this.getStringAttribute('responsible_inventory_role_id');
  }

  // responsible_operator_email - computed: true, optional: false, required: false
  public get responsibleOperatorEmail() {
    return this.getStringAttribute('responsible_operator_email');
  }

  // responsible_operator_id - computed: true, optional: false, required: false
  public get responsibleOperatorId() {
    return this.getStringAttribute('responsible_operator_id');
  }

  // responsible_primary_contact_email - computed: true, optional: false, required: false
  public get responsiblePrimaryContactEmail() {
    return this.getStringAttribute('responsible_primary_contact_email');
  }

  // responsible_primary_contact_id - computed: true, optional: false, required: false
  public get responsiblePrimaryContactId() {
    return this.getStringAttribute('responsible_primary_contact_id');
  }

  // revenue_relevance - computed: true, optional: false, required: false
  public get revenueRelevance() {
    return this.getStringAttribute('revenue_relevance');
  }

  // soft_license_mode - computed: true, optional: false, required: false
  public get softLicenseMode() {
    return this.getStringAttribute('soft_license_mode');
  }

  // type_of_data - computed: true, optional: false, required: false
  public get typeOfData() {
    return this.getStringAttribute('type_of_data');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
