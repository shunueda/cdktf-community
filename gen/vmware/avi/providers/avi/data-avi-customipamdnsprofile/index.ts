// https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/customipamdnsprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAviCustomipamdnsprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/customipamdnsprofile#id DataAviCustomipamdnsprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/customipamdnsprofile#name DataAviCustomipamdnsprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/customipamdnsprofile#tenant_ref DataAviCustomipamdnsprofile#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/customipamdnsprofile#uuid DataAviCustomipamdnsprofile#uuid}
  */
  readonly uuid?: string;
}
export interface DataAviCustomipamdnsprofileConfigpbAttributes {
}

export function dataAviCustomipamdnsprofileConfigpbAttributesToTerraform(struct?: DataAviCustomipamdnsprofileConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCustomipamdnsprofileConfigpbAttributesToHclTerraform(struct?: DataAviCustomipamdnsprofileConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCustomipamdnsprofileConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCustomipamdnsprofileConfigpbAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCustomipamdnsprofileConfigpbAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataAviCustomipamdnsprofileConfigpbAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCustomipamdnsprofileConfigpbAttributesOutputReference {
    return new DataAviCustomipamdnsprofileConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCustomipamdnsprofileScriptParams {
}

export function dataAviCustomipamdnsprofileScriptParamsToTerraform(struct?: DataAviCustomipamdnsprofileScriptParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCustomipamdnsprofileScriptParamsToHclTerraform(struct?: DataAviCustomipamdnsprofileScriptParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCustomipamdnsprofileScriptParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCustomipamdnsprofileScriptParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCustomipamdnsprofileScriptParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_dynamic - computed: true, optional: false, required: false
  public get isDynamic() {
    return this.getStringAttribute('is_dynamic');
  }

  // is_sensitive - computed: true, optional: false, required: false
  public get isSensitive() {
    return this.getStringAttribute('is_sensitive');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAviCustomipamdnsprofileScriptParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCustomipamdnsprofileScriptParamsOutputReference {
    return new DataAviCustomipamdnsprofileScriptParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/customipamdnsprofile avi_customipamdnsprofile}
*/
export class DataAviCustomipamdnsprofile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_customipamdnsprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAviCustomipamdnsprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAviCustomipamdnsprofile to import
  * @param importFromId The id of the existing DataAviCustomipamdnsprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/customipamdnsprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAviCustomipamdnsprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_customipamdnsprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/customipamdnsprofile avi_customipamdnsprofile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAviCustomipamdnsprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAviCustomipamdnsprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_customipamdnsprofile',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.1.1'
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
    this._name = config.name;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configpb_attributes - computed: true, optional: false, required: false
  private _configpbAttributes = new DataAviCustomipamdnsprofileConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // script_params - computed: true, optional: false, required: false
  private _scriptParams = new DataAviCustomipamdnsprofileScriptParamsList(this, "script_params", false);
  public get scriptParams() {
    return this._scriptParams;
  }

  // script_uri - computed: true, optional: false, required: false
  public get scriptUri() {
    return this.getStringAttribute('script_uri');
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
