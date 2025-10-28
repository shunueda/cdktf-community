// https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/mld_snooping_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MldSnoopingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The administrative state of the MLD Snooping Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/mld_snooping_policy#admin_state MldSnoopingPolicy#admin_state}
  */
  readonly adminState?: string;
  /**
  * The annotation of the MLD Snooping Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/mld_snooping_policy#annotation MldSnoopingPolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/mld_snooping_policy#annotations MldSnoopingPolicy#annotations}
  */
  readonly annotations?: MldSnoopingPolicyAnnotations[] | cdktf.IResolvable;
  /**
  * The controls for the MLD Snooping Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/mld_snooping_policy#control MldSnoopingPolicy#control}
  */
  readonly control?: string[];
  /**
  * The description of the MLD Snooping Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/mld_snooping_policy#description MldSnoopingPolicy#description}
  */
  readonly description?: string;
  /**
  * The last member interval (seconds) of the MLD Snooping Policy object. The group state is removed when no host responds before the timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/mld_snooping_policy#last_member_interval MldSnoopingPolicy#last_member_interval}
  */
  readonly lastMemberInterval?: string;
  /**
  * The name of the MLD Snooping Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/mld_snooping_policy#name MldSnoopingPolicy#name}
  */
  readonly name: string;
  /**
  * The name alias of the MLD Snooping Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/mld_snooping_policy#name_alias MldSnoopingPolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * The key for enabling clients to own their data for entity correlation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/mld_snooping_policy#owner_key MldSnoopingPolicy#owner_key}
  */
  readonly ownerKey?: string;
  /**
  * A tag for enabling clients to add their own data. For example, to indicate who created this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/mld_snooping_policy#owner_tag MldSnoopingPolicy#owner_tag}
  */
  readonly ownerTag?: string;
  /**
  * The distinguished name (DN) of the parent object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/mld_snooping_policy#parent_dn MldSnoopingPolicy#parent_dn}
  */
  readonly parentDn: string;
  /**
  * The query interval (seconds) of the MLD Snooping Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/mld_snooping_policy#query_interval MldSnoopingPolicy#query_interval}
  */
  readonly queryInterval?: string;
  /**
  * The response interval (seconds) of the MLD Snooping Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/mld_snooping_policy#response_interval MldSnoopingPolicy#response_interval}
  */
  readonly responseInterval?: string;
  /**
  * The start query count of the MLD Snooping Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/mld_snooping_policy#start_query_count MldSnoopingPolicy#start_query_count}
  */
  readonly startQueryCount?: string;
  /**
  * The query interval (seconds) of the MLD Snooping Policy object at start-up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/mld_snooping_policy#start_query_interval MldSnoopingPolicy#start_query_interval}
  */
  readonly startQueryInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/mld_snooping_policy#tags MldSnoopingPolicy#tags}
  */
  readonly tags?: MldSnoopingPolicyTags[] | cdktf.IResolvable;
  /**
  * The MLD version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/mld_snooping_policy#version MldSnoopingPolicy#version}
  */
  readonly version?: string;
}
export interface MldSnoopingPolicyAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/mld_snooping_policy#key MldSnoopingPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/mld_snooping_policy#value MldSnoopingPolicy#value}
  */
  readonly value: string;
}

export function mldSnoopingPolicyAnnotationsToTerraform(struct?: MldSnoopingPolicyAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function mldSnoopingPolicyAnnotationsToHclTerraform(struct?: MldSnoopingPolicyAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MldSnoopingPolicyAnnotationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MldSnoopingPolicyAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MldSnoopingPolicyAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class MldSnoopingPolicyAnnotationsList extends cdktf.ComplexList {
  public internalValue? : MldSnoopingPolicyAnnotations[] | cdktf.IResolvable

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
  public get(index: number): MldSnoopingPolicyAnnotationsOutputReference {
    return new MldSnoopingPolicyAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MldSnoopingPolicyTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/mld_snooping_policy#key MldSnoopingPolicy#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/mld_snooping_policy#value MldSnoopingPolicy#value}
  */
  readonly value: string;
}

export function mldSnoopingPolicyTagsToTerraform(struct?: MldSnoopingPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function mldSnoopingPolicyTagsToHclTerraform(struct?: MldSnoopingPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MldSnoopingPolicyTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MldSnoopingPolicyTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MldSnoopingPolicyTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class MldSnoopingPolicyTagsList extends cdktf.ComplexList {
  public internalValue? : MldSnoopingPolicyTags[] | cdktf.IResolvable

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
  public get(index: number): MldSnoopingPolicyTagsOutputReference {
    return new MldSnoopingPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/mld_snooping_policy aci_mld_snooping_policy}
*/
export class MldSnoopingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_mld_snooping_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MldSnoopingPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MldSnoopingPolicy to import
  * @param importFromId The id of the existing MldSnoopingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/mld_snooping_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MldSnoopingPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_mld_snooping_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/mld_snooping_policy aci_mld_snooping_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MldSnoopingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: MldSnoopingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_mld_snooping_policy',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminState = config.adminState;
    this._annotation = config.annotation;
    this._annotations.internalValue = config.annotations;
    this._control = config.control;
    this._description = config.description;
    this._lastMemberInterval = config.lastMemberInterval;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._ownerKey = config.ownerKey;
    this._ownerTag = config.ownerTag;
    this._parentDn = config.parentDn;
    this._queryInterval = config.queryInterval;
    this._responseInterval = config.responseInterval;
    this._startQueryCount = config.startQueryCount;
    this._startQueryInterval = config.startQueryInterval;
    this._tags.internalValue = config.tags;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state - computed: true, optional: true, required: false
  private _adminState?: string; 
  public get adminState() {
    return this.getStringAttribute('admin_state');
  }
  public set adminState(value: string) {
    this._adminState = value;
  }
  public resetAdminState() {
    this._adminState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateInput() {
    return this._adminState;
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new MldSnoopingPolicyAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: MldSnoopingPolicyAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // control - computed: true, optional: true, required: false
  private _control?: string[]; 
  public get control() {
    return cdktf.Fn.tolist(this.getListAttribute('control'));
  }
  public set control(value: string[]) {
    this._control = value;
  }
  public resetControl() {
    this._control = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlInput() {
    return this._control;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_member_interval - computed: true, optional: true, required: false
  private _lastMemberInterval?: string; 
  public get lastMemberInterval() {
    return this.getStringAttribute('last_member_interval');
  }
  public set lastMemberInterval(value: string) {
    this._lastMemberInterval = value;
  }
  public resetLastMemberInterval() {
    this._lastMemberInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastMemberIntervalInput() {
    return this._lastMemberInterval;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // owner_key - computed: true, optional: true, required: false
  private _ownerKey?: string; 
  public get ownerKey() {
    return this.getStringAttribute('owner_key');
  }
  public set ownerKey(value: string) {
    this._ownerKey = value;
  }
  public resetOwnerKey() {
    this._ownerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerKeyInput() {
    return this._ownerKey;
  }

  // owner_tag - computed: true, optional: true, required: false
  private _ownerTag?: string; 
  public get ownerTag() {
    return this.getStringAttribute('owner_tag');
  }
  public set ownerTag(value: string) {
    this._ownerTag = value;
  }
  public resetOwnerTag() {
    this._ownerTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerTagInput() {
    return this._ownerTag;
  }

  // parent_dn - computed: false, optional: false, required: true
  private _parentDn?: string; 
  public get parentDn() {
    return this.getStringAttribute('parent_dn');
  }
  public set parentDn(value: string) {
    this._parentDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentDnInput() {
    return this._parentDn;
  }

  // query_interval - computed: true, optional: true, required: false
  private _queryInterval?: string; 
  public get queryInterval() {
    return this.getStringAttribute('query_interval');
  }
  public set queryInterval(value: string) {
    this._queryInterval = value;
  }
  public resetQueryInterval() {
    this._queryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIntervalInput() {
    return this._queryInterval;
  }

  // response_interval - computed: true, optional: true, required: false
  private _responseInterval?: string; 
  public get responseInterval() {
    return this.getStringAttribute('response_interval');
  }
  public set responseInterval(value: string) {
    this._responseInterval = value;
  }
  public resetResponseInterval() {
    this._responseInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseIntervalInput() {
    return this._responseInterval;
  }

  // start_query_count - computed: true, optional: true, required: false
  private _startQueryCount?: string; 
  public get startQueryCount() {
    return this.getStringAttribute('start_query_count');
  }
  public set startQueryCount(value: string) {
    this._startQueryCount = value;
  }
  public resetStartQueryCount() {
    this._startQueryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startQueryCountInput() {
    return this._startQueryCount;
  }

  // start_query_interval - computed: true, optional: true, required: false
  private _startQueryInterval?: string; 
  public get startQueryInterval() {
    return this.getStringAttribute('start_query_interval');
  }
  public set startQueryInterval(value: string) {
    this._startQueryInterval = value;
  }
  public resetStartQueryInterval() {
    this._startQueryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startQueryIntervalInput() {
    return this._startQueryInterval;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new MldSnoopingPolicyTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: MldSnoopingPolicyTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_state: cdktf.stringToTerraform(this._adminState),
      annotation: cdktf.stringToTerraform(this._annotation),
      annotations: cdktf.listMapper(mldSnoopingPolicyAnnotationsToTerraform, false)(this._annotations.internalValue),
      control: cdktf.listMapper(cdktf.stringToTerraform, false)(this._control),
      description: cdktf.stringToTerraform(this._description),
      last_member_interval: cdktf.stringToTerraform(this._lastMemberInterval),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      owner_key: cdktf.stringToTerraform(this._ownerKey),
      owner_tag: cdktf.stringToTerraform(this._ownerTag),
      parent_dn: cdktf.stringToTerraform(this._parentDn),
      query_interval: cdktf.stringToTerraform(this._queryInterval),
      response_interval: cdktf.stringToTerraform(this._responseInterval),
      start_query_count: cdktf.stringToTerraform(this._startQueryCount),
      start_query_interval: cdktf.stringToTerraform(this._startQueryInterval),
      tags: cdktf.listMapper(mldSnoopingPolicyTagsToTerraform, false)(this._tags.internalValue),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_state: {
        value: cdktf.stringToHclTerraform(this._adminState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotations: {
        value: cdktf.listMapperHcl(mldSnoopingPolicyAnnotationsToHclTerraform, false)(this._annotations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MldSnoopingPolicyAnnotationsList",
      },
      control: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._control),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_member_interval: {
        value: cdktf.stringToHclTerraform(this._lastMemberInterval),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_key: {
        value: cdktf.stringToHclTerraform(this._ownerKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_tag: {
        value: cdktf.stringToHclTerraform(this._ownerTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_dn: {
        value: cdktf.stringToHclTerraform(this._parentDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_interval: {
        value: cdktf.stringToHclTerraform(this._queryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_interval: {
        value: cdktf.stringToHclTerraform(this._responseInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_query_count: {
        value: cdktf.stringToHclTerraform(this._startQueryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_query_interval: {
        value: cdktf.stringToHclTerraform(this._startQueryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(mldSnoopingPolicyTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MldSnoopingPolicyTagsList",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
