// https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIntersightMacpoolReservationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#account_moid DataIntersightMacpoolReservation#account_moid}
  */
  readonly accountMoid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#additional_properties DataIntersightMacpoolReservation#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Type of the allocation for the identity in the reservation either static or dynamic (i.e. via pool).
  * * `dynamic` - Identifiers to be allocated by system.
  * * `static` - Identifiers are assigned by the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#allocation_type DataIntersightMacpoolReservation#allocation_type}
  */
  readonly allocationType?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#class_id DataIntersightMacpoolReservation#class_id}
  */
  readonly classId?: string;
  /**
  * The time when this managed object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#create_time DataIntersightMacpoolReservation#create_time}
  */
  readonly createTime?: string;
  /**
  * The DomainGroup ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#domain_group_moid DataIntersightMacpoolReservation#domain_group_moid}
  */
  readonly domainGroupMoid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#id DataIntersightMacpoolReservation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * MAC identity to be reserved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#identity DataIntersightMacpoolReservation#identity}
  */
  readonly identity?: string;
  /**
  * The time when this managed object was last modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#mod_time DataIntersightMacpoolReservation#mod_time}
  */
  readonly modTime?: string;
  /**
  * The unique identifier of this Managed Object instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#moid DataIntersightMacpoolReservation#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#object_type DataIntersightMacpoolReservation#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#owners DataIntersightMacpoolReservation#owners}
  */
  readonly owners?: string[];
  /**
  * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs.
  * Objects that are made available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally available to all end users or restricted to end users based on their license entitlement. Users can use this property to differentiate the scope (global or a specific license tier) to which a shared MO belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#shared_scope DataIntersightMacpoolReservation#shared_scope}
  */
  readonly sharedScope?: string;
  /**
  * ancestors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#ancestors DataIntersightMacpoolReservation#ancestors}
  */
  readonly ancestors?: DataIntersightMacpoolReservationAncestors[] | cdktf.IResolvable;
  /**
  * block_head block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#block_head DataIntersightMacpoolReservation#block_head}
  */
  readonly blockHead?: DataIntersightMacpoolReservationBlockHead;
  /**
  * member_of block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#member_of DataIntersightMacpoolReservation#member_of}
  */
  readonly memberOf?: DataIntersightMacpoolReservationMemberOf[] | cdktf.IResolvable;
  /**
  * organization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#organization DataIntersightMacpoolReservation#organization}
  */
  readonly organization?: DataIntersightMacpoolReservationOrganization;
  /**
  * parent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#parent DataIntersightMacpoolReservation#parent}
  */
  readonly parent?: DataIntersightMacpoolReservationParent;
  /**
  * permission_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#permission_resources DataIntersightMacpoolReservation#permission_resources}
  */
  readonly permissionResources?: DataIntersightMacpoolReservationPermissionResources[] | cdktf.IResolvable;
  /**
  * pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#pool DataIntersightMacpoolReservation#pool}
  */
  readonly pool?: DataIntersightMacpoolReservationPool;
  /**
  * pool_member block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#pool_member DataIntersightMacpoolReservation#pool_member}
  */
  readonly poolMember?: DataIntersightMacpoolReservationPoolMember;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#tags DataIntersightMacpoolReservation#tags}
  */
  readonly tags?: DataIntersightMacpoolReservationTags[] | cdktf.IResolvable;
  /**
  * universe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#universe DataIntersightMacpoolReservation#universe}
  */
  readonly universe?: DataIntersightMacpoolReservationUniverse;
  /**
  * version_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#version_context DataIntersightMacpoolReservation#version_context}
  */
  readonly versionContext?: DataIntersightMacpoolReservationVersionContext;
}
export interface DataIntersightMacpoolReservationResultsAncestors {
}

export function dataIntersightMacpoolReservationResultsAncestorsToTerraform(struct?: DataIntersightMacpoolReservationResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightMacpoolReservationResultsAncestorsToHclTerraform(struct?: DataIntersightMacpoolReservationResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightMacpoolReservationResultsAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightMacpoolReservationResultsAncestors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightMacpoolReservationResultsAncestors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightMacpoolReservationResultsAncestorsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightMacpoolReservationResultsAncestorsOutputReference {
    return new DataIntersightMacpoolReservationResultsAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightMacpoolReservationResultsBlockHead {
}

export function dataIntersightMacpoolReservationResultsBlockHeadToTerraform(struct?: DataIntersightMacpoolReservationResultsBlockHead): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightMacpoolReservationResultsBlockHeadToHclTerraform(struct?: DataIntersightMacpoolReservationResultsBlockHead): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightMacpoolReservationResultsBlockHeadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightMacpoolReservationResultsBlockHead | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightMacpoolReservationResultsBlockHead | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightMacpoolReservationResultsBlockHeadList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightMacpoolReservationResultsBlockHeadOutputReference {
    return new DataIntersightMacpoolReservationResultsBlockHeadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightMacpoolReservationResultsMemberOf {
}

export function dataIntersightMacpoolReservationResultsMemberOfToTerraform(struct?: DataIntersightMacpoolReservationResultsMemberOf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightMacpoolReservationResultsMemberOfToHclTerraform(struct?: DataIntersightMacpoolReservationResultsMemberOf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightMacpoolReservationResultsMemberOfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightMacpoolReservationResultsMemberOf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightMacpoolReservationResultsMemberOf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // id_block_moid - computed: true, optional: false, required: false
  public get idBlockMoid() {
    return this.getStringAttribute('id_block_moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // pool_moid - computed: true, optional: false, required: false
  public get poolMoid() {
    return this.getStringAttribute('pool_moid');
  }
}

export class DataIntersightMacpoolReservationResultsMemberOfList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightMacpoolReservationResultsMemberOfOutputReference {
    return new DataIntersightMacpoolReservationResultsMemberOfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightMacpoolReservationResultsOrganization {
}

export function dataIntersightMacpoolReservationResultsOrganizationToTerraform(struct?: DataIntersightMacpoolReservationResultsOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightMacpoolReservationResultsOrganizationToHclTerraform(struct?: DataIntersightMacpoolReservationResultsOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightMacpoolReservationResultsOrganizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightMacpoolReservationResultsOrganization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightMacpoolReservationResultsOrganization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightMacpoolReservationResultsOrganizationList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightMacpoolReservationResultsOrganizationOutputReference {
    return new DataIntersightMacpoolReservationResultsOrganizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightMacpoolReservationResultsParent {
}

export function dataIntersightMacpoolReservationResultsParentToTerraform(struct?: DataIntersightMacpoolReservationResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightMacpoolReservationResultsParentToHclTerraform(struct?: DataIntersightMacpoolReservationResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightMacpoolReservationResultsParentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightMacpoolReservationResultsParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightMacpoolReservationResultsParent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightMacpoolReservationResultsParentList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightMacpoolReservationResultsParentOutputReference {
    return new DataIntersightMacpoolReservationResultsParentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightMacpoolReservationResultsPermissionResources {
}

export function dataIntersightMacpoolReservationResultsPermissionResourcesToTerraform(struct?: DataIntersightMacpoolReservationResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightMacpoolReservationResultsPermissionResourcesToHclTerraform(struct?: DataIntersightMacpoolReservationResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightMacpoolReservationResultsPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightMacpoolReservationResultsPermissionResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightMacpoolReservationResultsPermissionResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightMacpoolReservationResultsPermissionResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightMacpoolReservationResultsPermissionResourcesOutputReference {
    return new DataIntersightMacpoolReservationResultsPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightMacpoolReservationResultsPool {
}

export function dataIntersightMacpoolReservationResultsPoolToTerraform(struct?: DataIntersightMacpoolReservationResultsPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightMacpoolReservationResultsPoolToHclTerraform(struct?: DataIntersightMacpoolReservationResultsPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightMacpoolReservationResultsPoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightMacpoolReservationResultsPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightMacpoolReservationResultsPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightMacpoolReservationResultsPoolList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightMacpoolReservationResultsPoolOutputReference {
    return new DataIntersightMacpoolReservationResultsPoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightMacpoolReservationResultsPoolMember {
}

export function dataIntersightMacpoolReservationResultsPoolMemberToTerraform(struct?: DataIntersightMacpoolReservationResultsPoolMember): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightMacpoolReservationResultsPoolMemberToHclTerraform(struct?: DataIntersightMacpoolReservationResultsPoolMember): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightMacpoolReservationResultsPoolMemberOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightMacpoolReservationResultsPoolMember | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightMacpoolReservationResultsPoolMember | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightMacpoolReservationResultsPoolMemberList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightMacpoolReservationResultsPoolMemberOutputReference {
    return new DataIntersightMacpoolReservationResultsPoolMemberOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightMacpoolReservationResultsTagsAncestorDefinitions {
}

export function dataIntersightMacpoolReservationResultsTagsAncestorDefinitionsToTerraform(struct?: DataIntersightMacpoolReservationResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightMacpoolReservationResultsTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightMacpoolReservationResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightMacpoolReservationResultsTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightMacpoolReservationResultsTagsAncestorDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightMacpoolReservationResultsTagsAncestorDefinitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightMacpoolReservationResultsTagsAncestorDefinitionsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightMacpoolReservationResultsTagsAncestorDefinitionsOutputReference {
    return new DataIntersightMacpoolReservationResultsTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightMacpoolReservationResultsTagsDefinition {
}

export function dataIntersightMacpoolReservationResultsTagsDefinitionToTerraform(struct?: DataIntersightMacpoolReservationResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightMacpoolReservationResultsTagsDefinitionToHclTerraform(struct?: DataIntersightMacpoolReservationResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightMacpoolReservationResultsTagsDefinitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightMacpoolReservationResultsTagsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightMacpoolReservationResultsTagsDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightMacpoolReservationResultsTagsDefinitionList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightMacpoolReservationResultsTagsDefinitionOutputReference {
    return new DataIntersightMacpoolReservationResultsTagsDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightMacpoolReservationResultsTags {
}

export function dataIntersightMacpoolReservationResultsTagsToTerraform(struct?: DataIntersightMacpoolReservationResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightMacpoolReservationResultsTagsToHclTerraform(struct?: DataIntersightMacpoolReservationResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightMacpoolReservationResultsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightMacpoolReservationResultsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightMacpoolReservationResultsTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // ancestor_definitions - computed: true, optional: false, required: false
  private _ancestorDefinitions = new DataIntersightMacpoolReservationResultsTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }

  // definition - computed: true, optional: false, required: false
  private _definition = new DataIntersightMacpoolReservationResultsTagsDefinitionList(this, "definition", false);
  public get definition() {
    return this._definition;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // propagated - computed: true, optional: false, required: false
  public get propagated() {
    return this.getBooleanAttribute('propagated');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataIntersightMacpoolReservationResultsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightMacpoolReservationResultsTagsOutputReference {
    return new DataIntersightMacpoolReservationResultsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightMacpoolReservationResultsUniverse {
}

export function dataIntersightMacpoolReservationResultsUniverseToTerraform(struct?: DataIntersightMacpoolReservationResultsUniverse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightMacpoolReservationResultsUniverseToHclTerraform(struct?: DataIntersightMacpoolReservationResultsUniverse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightMacpoolReservationResultsUniverseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightMacpoolReservationResultsUniverse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightMacpoolReservationResultsUniverse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightMacpoolReservationResultsUniverseList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightMacpoolReservationResultsUniverseOutputReference {
    return new DataIntersightMacpoolReservationResultsUniverseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightMacpoolReservationResultsVersionContextInterestedMos {
}

export function dataIntersightMacpoolReservationResultsVersionContextInterestedMosToTerraform(struct?: DataIntersightMacpoolReservationResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightMacpoolReservationResultsVersionContextInterestedMosToHclTerraform(struct?: DataIntersightMacpoolReservationResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightMacpoolReservationResultsVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightMacpoolReservationResultsVersionContextInterestedMos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightMacpoolReservationResultsVersionContextInterestedMos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightMacpoolReservationResultsVersionContextInterestedMosList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightMacpoolReservationResultsVersionContextInterestedMosOutputReference {
    return new DataIntersightMacpoolReservationResultsVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightMacpoolReservationResultsVersionContextRefMo {
}

export function dataIntersightMacpoolReservationResultsVersionContextRefMoToTerraform(struct?: DataIntersightMacpoolReservationResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightMacpoolReservationResultsVersionContextRefMoToHclTerraform(struct?: DataIntersightMacpoolReservationResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightMacpoolReservationResultsVersionContextRefMoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightMacpoolReservationResultsVersionContextRefMo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightMacpoolReservationResultsVersionContextRefMo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightMacpoolReservationResultsVersionContextRefMoList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightMacpoolReservationResultsVersionContextRefMoOutputReference {
    return new DataIntersightMacpoolReservationResultsVersionContextRefMoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightMacpoolReservationResultsVersionContext {
}

export function dataIntersightMacpoolReservationResultsVersionContextToTerraform(struct?: DataIntersightMacpoolReservationResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightMacpoolReservationResultsVersionContextToHclTerraform(struct?: DataIntersightMacpoolReservationResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightMacpoolReservationResultsVersionContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightMacpoolReservationResultsVersionContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightMacpoolReservationResultsVersionContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // interested_mos - computed: true, optional: false, required: false
  private _interestedMos = new DataIntersightMacpoolReservationResultsVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }

  // marked_for_deletion - computed: true, optional: false, required: false
  public get markedForDeletion() {
    return this.getBooleanAttribute('marked_for_deletion');
  }

  // nr_version - computed: true, optional: false, required: false
  public get nrVersion() {
    return this.getStringAttribute('nr_version');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // ref_mo - computed: true, optional: false, required: false
  private _refMo = new DataIntersightMacpoolReservationResultsVersionContextRefMoList(this, "ref_mo", false);
  public get refMo() {
    return this._refMo;
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // version_type - computed: true, optional: false, required: false
  public get versionType() {
    return this.getStringAttribute('version_type');
  }
}

export class DataIntersightMacpoolReservationResultsVersionContextList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightMacpoolReservationResultsVersionContextOutputReference {
    return new DataIntersightMacpoolReservationResultsVersionContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightMacpoolReservationResults {
}

export function dataIntersightMacpoolReservationResultsToTerraform(struct?: DataIntersightMacpoolReservationResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightMacpoolReservationResultsToHclTerraform(struct?: DataIntersightMacpoolReservationResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightMacpoolReservationResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightMacpoolReservationResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightMacpoolReservationResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_moid - computed: true, optional: false, required: false
  public get accountMoid() {
    return this.getStringAttribute('account_moid');
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // allocation_type - computed: true, optional: false, required: false
  public get allocationType() {
    return this.getStringAttribute('allocation_type');
  }

  // ancestors - computed: true, optional: false, required: false
  private _ancestors = new DataIntersightMacpoolReservationResultsAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }

  // block_head - computed: true, optional: false, required: false
  private _blockHead = new DataIntersightMacpoolReservationResultsBlockHeadList(this, "block_head", false);
  public get blockHead() {
    return this._blockHead;
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // domain_group_moid - computed: true, optional: false, required: false
  public get domainGroupMoid() {
    return this.getStringAttribute('domain_group_moid');
  }

  // identity - computed: true, optional: false, required: false
  public get identity() {
    return this.getStringAttribute('identity');
  }

  // member_of - computed: true, optional: false, required: false
  private _memberOf = new DataIntersightMacpoolReservationResultsMemberOfList(this, "member_of", false);
  public get memberOf() {
    return this._memberOf;
  }

  // mod_time - computed: true, optional: false, required: false
  public get modTime() {
    return this.getStringAttribute('mod_time');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // organization - computed: true, optional: false, required: false
  private _organization = new DataIntersightMacpoolReservationResultsOrganizationList(this, "organization", false);
  public get organization() {
    return this._organization;
  }

  // owners - computed: true, optional: false, required: false
  public get owners() {
    return this.getListAttribute('owners');
  }

  // parent - computed: true, optional: false, required: false
  private _parent = new DataIntersightMacpoolReservationResultsParentList(this, "parent", false);
  public get parent() {
    return this._parent;
  }

  // permission_resources - computed: true, optional: false, required: false
  private _permissionResources = new DataIntersightMacpoolReservationResultsPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }

  // pool - computed: true, optional: false, required: false
  private _pool = new DataIntersightMacpoolReservationResultsPoolList(this, "pool", false);
  public get pool() {
    return this._pool;
  }

  // pool_member - computed: true, optional: false, required: false
  private _poolMember = new DataIntersightMacpoolReservationResultsPoolMemberList(this, "pool_member", false);
  public get poolMember() {
    return this._poolMember;
  }

  // shared_scope - computed: true, optional: false, required: false
  public get sharedScope() {
    return this.getStringAttribute('shared_scope');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataIntersightMacpoolReservationResultsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // universe - computed: true, optional: false, required: false
  private _universe = new DataIntersightMacpoolReservationResultsUniverseList(this, "universe", false);
  public get universe() {
    return this._universe;
  }

  // version_context - computed: true, optional: false, required: false
  private _versionContext = new DataIntersightMacpoolReservationResultsVersionContextList(this, "version_context", false);
  public get versionContext() {
    return this._versionContext;
  }
}

export class DataIntersightMacpoolReservationResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightMacpoolReservationResultsOutputReference {
    return new DataIntersightMacpoolReservationResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightMacpoolReservationAncestors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#additional_properties DataIntersightMacpoolReservation#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#class_id DataIntersightMacpoolReservation#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#moid DataIntersightMacpoolReservation#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#object_type DataIntersightMacpoolReservation#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#selector DataIntersightMacpoolReservation#selector}
  */
  readonly selector?: string;
}

export function dataIntersightMacpoolReservationAncestorsToTerraform(struct?: DataIntersightMacpoolReservationAncestors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightMacpoolReservationAncestorsToHclTerraform(struct?: DataIntersightMacpoolReservationAncestors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightMacpoolReservationAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightMacpoolReservationAncestors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightMacpoolReservationAncestors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightMacpoolReservationAncestorsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightMacpoolReservationAncestors[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightMacpoolReservationAncestorsOutputReference {
    return new DataIntersightMacpoolReservationAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightMacpoolReservationBlockHead {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#additional_properties DataIntersightMacpoolReservation#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#class_id DataIntersightMacpoolReservation#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#moid DataIntersightMacpoolReservation#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#object_type DataIntersightMacpoolReservation#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#selector DataIntersightMacpoolReservation#selector}
  */
  readonly selector?: string;
}

export function dataIntersightMacpoolReservationBlockHeadToTerraform(struct?: DataIntersightMacpoolReservationBlockHeadOutputReference | DataIntersightMacpoolReservationBlockHead): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightMacpoolReservationBlockHeadToHclTerraform(struct?: DataIntersightMacpoolReservationBlockHeadOutputReference | DataIntersightMacpoolReservationBlockHead): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightMacpoolReservationBlockHeadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightMacpoolReservationBlockHead | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightMacpoolReservationBlockHead | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightMacpoolReservationMemberOf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#additional_properties DataIntersightMacpoolReservation#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#class_id DataIntersightMacpoolReservation#class_id}
  */
  readonly classId?: string;
  /**
  * The moid of the block of a pool to which this ID belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#id_block_moid DataIntersightMacpoolReservation#id_block_moid}
  */
  readonly idBlockMoid?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#object_type DataIntersightMacpoolReservation#object_type}
  */
  readonly objectType?: string;
  /**
  * The moid of the pool to which this ID belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#pool_moid DataIntersightMacpoolReservation#pool_moid}
  */
  readonly poolMoid?: string;
}

export function dataIntersightMacpoolReservationMemberOfToTerraform(struct?: DataIntersightMacpoolReservationMemberOf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    id_block_moid: cdktf.stringToTerraform(struct!.idBlockMoid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    pool_moid: cdktf.stringToTerraform(struct!.poolMoid),
  }
}


export function dataIntersightMacpoolReservationMemberOfToHclTerraform(struct?: DataIntersightMacpoolReservationMemberOf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_block_moid: {
      value: cdktf.stringToHclTerraform(struct!.idBlockMoid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_moid: {
      value: cdktf.stringToHclTerraform(struct!.poolMoid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightMacpoolReservationMemberOfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightMacpoolReservationMemberOf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._idBlockMoid !== undefined) {
      hasAnyValues = true;
      internalValueResult.idBlockMoid = this._idBlockMoid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._poolMoid !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolMoid = this._poolMoid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightMacpoolReservationMemberOf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._idBlockMoid = undefined;
      this._objectType = undefined;
      this._poolMoid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._idBlockMoid = value.idBlockMoid;
      this._objectType = value.objectType;
      this._poolMoid = value.poolMoid;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // id_block_moid - computed: false, optional: true, required: false
  private _idBlockMoid?: string; 
  public get idBlockMoid() {
    return this.getStringAttribute('id_block_moid');
  }
  public set idBlockMoid(value: string) {
    this._idBlockMoid = value;
  }
  public resetIdBlockMoid() {
    this._idBlockMoid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idBlockMoidInput() {
    return this._idBlockMoid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // pool_moid - computed: false, optional: true, required: false
  private _poolMoid?: string; 
  public get poolMoid() {
    return this.getStringAttribute('pool_moid');
  }
  public set poolMoid(value: string) {
    this._poolMoid = value;
  }
  public resetPoolMoid() {
    this._poolMoid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolMoidInput() {
    return this._poolMoid;
  }
}

export class DataIntersightMacpoolReservationMemberOfList extends cdktf.ComplexList {
  public internalValue? : DataIntersightMacpoolReservationMemberOf[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightMacpoolReservationMemberOfOutputReference {
    return new DataIntersightMacpoolReservationMemberOfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightMacpoolReservationOrganization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#additional_properties DataIntersightMacpoolReservation#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#class_id DataIntersightMacpoolReservation#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#moid DataIntersightMacpoolReservation#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#object_type DataIntersightMacpoolReservation#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#selector DataIntersightMacpoolReservation#selector}
  */
  readonly selector?: string;
}

export function dataIntersightMacpoolReservationOrganizationToTerraform(struct?: DataIntersightMacpoolReservationOrganizationOutputReference | DataIntersightMacpoolReservationOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightMacpoolReservationOrganizationToHclTerraform(struct?: DataIntersightMacpoolReservationOrganizationOutputReference | DataIntersightMacpoolReservationOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightMacpoolReservationOrganizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightMacpoolReservationOrganization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightMacpoolReservationOrganization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightMacpoolReservationParent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#additional_properties DataIntersightMacpoolReservation#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#class_id DataIntersightMacpoolReservation#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#moid DataIntersightMacpoolReservation#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#object_type DataIntersightMacpoolReservation#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#selector DataIntersightMacpoolReservation#selector}
  */
  readonly selector?: string;
}

export function dataIntersightMacpoolReservationParentToTerraform(struct?: DataIntersightMacpoolReservationParentOutputReference | DataIntersightMacpoolReservationParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightMacpoolReservationParentToHclTerraform(struct?: DataIntersightMacpoolReservationParentOutputReference | DataIntersightMacpoolReservationParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightMacpoolReservationParentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightMacpoolReservationParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightMacpoolReservationParent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightMacpoolReservationPermissionResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#additional_properties DataIntersightMacpoolReservation#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#class_id DataIntersightMacpoolReservation#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#moid DataIntersightMacpoolReservation#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#object_type DataIntersightMacpoolReservation#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#selector DataIntersightMacpoolReservation#selector}
  */
  readonly selector?: string;
}

export function dataIntersightMacpoolReservationPermissionResourcesToTerraform(struct?: DataIntersightMacpoolReservationPermissionResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightMacpoolReservationPermissionResourcesToHclTerraform(struct?: DataIntersightMacpoolReservationPermissionResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightMacpoolReservationPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightMacpoolReservationPermissionResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightMacpoolReservationPermissionResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightMacpoolReservationPermissionResourcesList extends cdktf.ComplexList {
  public internalValue? : DataIntersightMacpoolReservationPermissionResources[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightMacpoolReservationPermissionResourcesOutputReference {
    return new DataIntersightMacpoolReservationPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightMacpoolReservationPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#additional_properties DataIntersightMacpoolReservation#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#class_id DataIntersightMacpoolReservation#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#moid DataIntersightMacpoolReservation#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#object_type DataIntersightMacpoolReservation#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#selector DataIntersightMacpoolReservation#selector}
  */
  readonly selector?: string;
}

export function dataIntersightMacpoolReservationPoolToTerraform(struct?: DataIntersightMacpoolReservationPoolOutputReference | DataIntersightMacpoolReservationPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightMacpoolReservationPoolToHclTerraform(struct?: DataIntersightMacpoolReservationPoolOutputReference | DataIntersightMacpoolReservationPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightMacpoolReservationPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightMacpoolReservationPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightMacpoolReservationPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightMacpoolReservationPoolMember {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#additional_properties DataIntersightMacpoolReservation#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#class_id DataIntersightMacpoolReservation#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#moid DataIntersightMacpoolReservation#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#object_type DataIntersightMacpoolReservation#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#selector DataIntersightMacpoolReservation#selector}
  */
  readonly selector?: string;
}

export function dataIntersightMacpoolReservationPoolMemberToTerraform(struct?: DataIntersightMacpoolReservationPoolMemberOutputReference | DataIntersightMacpoolReservationPoolMember): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightMacpoolReservationPoolMemberToHclTerraform(struct?: DataIntersightMacpoolReservationPoolMemberOutputReference | DataIntersightMacpoolReservationPoolMember): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightMacpoolReservationPoolMemberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightMacpoolReservationPoolMember | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightMacpoolReservationPoolMember | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightMacpoolReservationTagsAncestorDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#additional_properties DataIntersightMacpoolReservation#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#class_id DataIntersightMacpoolReservation#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#moid DataIntersightMacpoolReservation#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#object_type DataIntersightMacpoolReservation#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#selector DataIntersightMacpoolReservation#selector}
  */
  readonly selector?: string;
}

export function dataIntersightMacpoolReservationTagsAncestorDefinitionsToTerraform(struct?: DataIntersightMacpoolReservationTagsAncestorDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightMacpoolReservationTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightMacpoolReservationTagsAncestorDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightMacpoolReservationTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightMacpoolReservationTagsAncestorDefinitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightMacpoolReservationTagsAncestorDefinitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightMacpoolReservationTagsAncestorDefinitionsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightMacpoolReservationTagsAncestorDefinitions[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightMacpoolReservationTagsAncestorDefinitionsOutputReference {
    return new DataIntersightMacpoolReservationTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightMacpoolReservationTagsDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#additional_properties DataIntersightMacpoolReservation#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#class_id DataIntersightMacpoolReservation#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#moid DataIntersightMacpoolReservation#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#object_type DataIntersightMacpoolReservation#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#selector DataIntersightMacpoolReservation#selector}
  */
  readonly selector?: string;
}

export function dataIntersightMacpoolReservationTagsDefinitionToTerraform(struct?: DataIntersightMacpoolReservationTagsDefinitionOutputReference | DataIntersightMacpoolReservationTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightMacpoolReservationTagsDefinitionToHclTerraform(struct?: DataIntersightMacpoolReservationTagsDefinitionOutputReference | DataIntersightMacpoolReservationTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightMacpoolReservationTagsDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightMacpoolReservationTagsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightMacpoolReservationTagsDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightMacpoolReservationTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#additional_properties DataIntersightMacpoolReservation#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The string representation of a tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#key DataIntersightMacpoolReservation#key}
  */
  readonly key?: string;
  /**
  * Propagated is a boolean flag that indicates whether the tag is propagated to the related managed objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#propagated DataIntersightMacpoolReservation#propagated}
  */
  readonly propagated?: boolean | cdktf.IResolvable;
  /**
  * An enum type that defines the type of tag. Supported values are 'pathtag' and 'keyvalue'.
  * * `KeyValue` - KeyValue type of tag. Key is required for these tags. Value is optional.
  * * `PathTag` - Key contain path information. Value is not present for these tags. The path is created by using the '/' character as a delimiter.For example, if the tag is "A/B/C", then "A" is the parent tag, "B" is the child tag of "A" and "C" is the child tag of "B".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#type DataIntersightMacpoolReservation#type}
  */
  readonly type?: string;
  /**
  * The string representation of a tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#value DataIntersightMacpoolReservation#value}
  */
  readonly value?: string;
  /**
  * ancestor_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#ancestor_definitions DataIntersightMacpoolReservation#ancestor_definitions}
  */
  readonly ancestorDefinitions?: DataIntersightMacpoolReservationTagsAncestorDefinitions[] | cdktf.IResolvable;
  /**
  * definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#definition DataIntersightMacpoolReservation#definition}
  */
  readonly definition?: DataIntersightMacpoolReservationTagsDefinition;
}

export function dataIntersightMacpoolReservationTagsToTerraform(struct?: DataIntersightMacpoolReservationTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    key: cdktf.stringToTerraform(struct!.key),
    propagated: cdktf.booleanToTerraform(struct!.propagated),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    ancestor_definitions: cdktf.listMapper(dataIntersightMacpoolReservationTagsAncestorDefinitionsToTerraform, true)(struct!.ancestorDefinitions),
    definition: dataIntersightMacpoolReservationTagsDefinitionToTerraform(struct!.definition),
  }
}


export function dataIntersightMacpoolReservationTagsToHclTerraform(struct?: DataIntersightMacpoolReservationTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagated: {
      value: cdktf.booleanToHclTerraform(struct!.propagated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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
    ancestor_definitions: {
      value: cdktf.listMapperHcl(dataIntersightMacpoolReservationTagsAncestorDefinitionsToHclTerraform, true)(struct!.ancestorDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightMacpoolReservationTagsAncestorDefinitionsList",
    },
    definition: {
      value: dataIntersightMacpoolReservationTagsDefinitionToHclTerraform(struct!.definition),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightMacpoolReservationTagsDefinitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightMacpoolReservationTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightMacpoolReservationTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._propagated !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagated = this._propagated;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._ancestorDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ancestorDefinitions = this._ancestorDefinitions?.internalValue;
    }
    if (this._definition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightMacpoolReservationTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._key = undefined;
      this._propagated = undefined;
      this._type = undefined;
      this._value = undefined;
      this._ancestorDefinitions.internalValue = undefined;
      this._definition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._key = value.key;
      this._propagated = value.propagated;
      this._type = value.type;
      this._value = value.value;
      this._ancestorDefinitions.internalValue = value.ancestorDefinitions;
      this._definition.internalValue = value.definition;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // propagated - computed: false, optional: true, required: false
  private _propagated?: boolean | cdktf.IResolvable; 
  public get propagated() {
    return this.getBooleanAttribute('propagated');
  }
  public set propagated(value: boolean | cdktf.IResolvable) {
    this._propagated = value;
  }
  public resetPropagated() {
    this._propagated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagatedInput() {
    return this._propagated;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // ancestor_definitions - computed: false, optional: true, required: false
  private _ancestorDefinitions = new DataIntersightMacpoolReservationTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }
  public putAncestorDefinitions(value: DataIntersightMacpoolReservationTagsAncestorDefinitions[] | cdktf.IResolvable) {
    this._ancestorDefinitions.internalValue = value;
  }
  public resetAncestorDefinitions() {
    this._ancestorDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorDefinitionsInput() {
    return this._ancestorDefinitions.internalValue;
  }

  // definition - computed: false, optional: true, required: false
  private _definition = new DataIntersightMacpoolReservationTagsDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: DataIntersightMacpoolReservationTagsDefinition) {
    this._definition.internalValue = value;
  }
  public resetDefinition() {
    this._definition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }
}

export class DataIntersightMacpoolReservationTagsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightMacpoolReservationTags[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightMacpoolReservationTagsOutputReference {
    return new DataIntersightMacpoolReservationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightMacpoolReservationUniverse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#additional_properties DataIntersightMacpoolReservation#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#class_id DataIntersightMacpoolReservation#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#moid DataIntersightMacpoolReservation#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#object_type DataIntersightMacpoolReservation#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#selector DataIntersightMacpoolReservation#selector}
  */
  readonly selector?: string;
}

export function dataIntersightMacpoolReservationUniverseToTerraform(struct?: DataIntersightMacpoolReservationUniverseOutputReference | DataIntersightMacpoolReservationUniverse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightMacpoolReservationUniverseToHclTerraform(struct?: DataIntersightMacpoolReservationUniverseOutputReference | DataIntersightMacpoolReservationUniverse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightMacpoolReservationUniverseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightMacpoolReservationUniverse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightMacpoolReservationUniverse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightMacpoolReservationVersionContextInterestedMos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#additional_properties DataIntersightMacpoolReservation#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#class_id DataIntersightMacpoolReservation#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#moid DataIntersightMacpoolReservation#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#object_type DataIntersightMacpoolReservation#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#selector DataIntersightMacpoolReservation#selector}
  */
  readonly selector?: string;
}

export function dataIntersightMacpoolReservationVersionContextInterestedMosToTerraform(struct?: DataIntersightMacpoolReservationVersionContextInterestedMos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightMacpoolReservationVersionContextInterestedMosToHclTerraform(struct?: DataIntersightMacpoolReservationVersionContextInterestedMos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightMacpoolReservationVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightMacpoolReservationVersionContextInterestedMos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightMacpoolReservationVersionContextInterestedMos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightMacpoolReservationVersionContextInterestedMosList extends cdktf.ComplexList {
  public internalValue? : DataIntersightMacpoolReservationVersionContextInterestedMos[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightMacpoolReservationVersionContextInterestedMosOutputReference {
    return new DataIntersightMacpoolReservationVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightMacpoolReservationVersionContextRefMo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#additional_properties DataIntersightMacpoolReservation#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#class_id DataIntersightMacpoolReservation#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#moid DataIntersightMacpoolReservation#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#object_type DataIntersightMacpoolReservation#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#selector DataIntersightMacpoolReservation#selector}
  */
  readonly selector?: string;
}

export function dataIntersightMacpoolReservationVersionContextRefMoToTerraform(struct?: DataIntersightMacpoolReservationVersionContextRefMoOutputReference | DataIntersightMacpoolReservationVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightMacpoolReservationVersionContextRefMoToHclTerraform(struct?: DataIntersightMacpoolReservationVersionContextRefMoOutputReference | DataIntersightMacpoolReservationVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightMacpoolReservationVersionContextRefMoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightMacpoolReservationVersionContextRefMo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightMacpoolReservationVersionContextRefMo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightMacpoolReservationVersionContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#additional_properties DataIntersightMacpoolReservation#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#class_id DataIntersightMacpoolReservation#class_id}
  */
  readonly classId?: string;
  /**
  * The flag to indicate if snapshot is marked for deletion or not. If flag is set then snapshot will be removed after the successful deployment of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#marked_for_deletion DataIntersightMacpoolReservation#marked_for_deletion}
  */
  readonly markedForDeletion?: boolean | cdktf.IResolvable;
  /**
  * The version of the Managed Object, e.g. an incrementing number or a hash id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#nr_version DataIntersightMacpoolReservation#nr_version}
  */
  readonly nrVersion?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#object_type DataIntersightMacpoolReservation#object_type}
  */
  readonly objectType?: string;
  /**
  * The time this versioned Managed Object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#timestamp DataIntersightMacpoolReservation#timestamp}
  */
  readonly timestamp?: string;
  /**
  * Specifies type of version. Currently the only supported value is "Configured"
  * that is used to keep track of snapshots of policies and profiles that are intended
  * to be configured to target endpoints.
  * * `Modified` - Version created every time an object is modified.
  * * `Configured` - Version created every time an object is configured to the service profile.
  * * `Deployed` - Version created for objects related to a service profile when it is deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#version_type DataIntersightMacpoolReservation#version_type}
  */
  readonly versionType?: string;
  /**
  * interested_mos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#interested_mos DataIntersightMacpoolReservation#interested_mos}
  */
  readonly interestedMos?: DataIntersightMacpoolReservationVersionContextInterestedMos[] | cdktf.IResolvable;
  /**
  * ref_mo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#ref_mo DataIntersightMacpoolReservation#ref_mo}
  */
  readonly refMo?: DataIntersightMacpoolReservationVersionContextRefMo;
}

export function dataIntersightMacpoolReservationVersionContextToTerraform(struct?: DataIntersightMacpoolReservationVersionContextOutputReference | DataIntersightMacpoolReservationVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    marked_for_deletion: cdktf.booleanToTerraform(struct!.markedForDeletion),
    nr_version: cdktf.stringToTerraform(struct!.nrVersion),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    timestamp: cdktf.stringToTerraform(struct!.timestamp),
    version_type: cdktf.stringToTerraform(struct!.versionType),
    interested_mos: cdktf.listMapper(dataIntersightMacpoolReservationVersionContextInterestedMosToTerraform, true)(struct!.interestedMos),
    ref_mo: dataIntersightMacpoolReservationVersionContextRefMoToTerraform(struct!.refMo),
  }
}


export function dataIntersightMacpoolReservationVersionContextToHclTerraform(struct?: DataIntersightMacpoolReservationVersionContextOutputReference | DataIntersightMacpoolReservationVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    marked_for_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.markedForDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nr_version: {
      value: cdktf.stringToHclTerraform(struct!.nrVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: cdktf.stringToHclTerraform(struct!.timestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_type: {
      value: cdktf.stringToHclTerraform(struct!.versionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interested_mos: {
      value: cdktf.listMapperHcl(dataIntersightMacpoolReservationVersionContextInterestedMosToHclTerraform, true)(struct!.interestedMos),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightMacpoolReservationVersionContextInterestedMosList",
    },
    ref_mo: {
      value: dataIntersightMacpoolReservationVersionContextRefMoToHclTerraform(struct!.refMo),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightMacpoolReservationVersionContextRefMoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightMacpoolReservationVersionContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightMacpoolReservationVersionContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._markedForDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.markedForDeletion = this._markedForDeletion;
    }
    if (this._nrVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrVersion = this._nrVersion;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    if (this._versionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionType = this._versionType;
    }
    if (this._interestedMos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interestedMos = this._interestedMos?.internalValue;
    }
    if (this._refMo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refMo = this._refMo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightMacpoolReservationVersionContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._markedForDeletion = undefined;
      this._nrVersion = undefined;
      this._objectType = undefined;
      this._timestamp = undefined;
      this._versionType = undefined;
      this._interestedMos.internalValue = undefined;
      this._refMo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._markedForDeletion = value.markedForDeletion;
      this._nrVersion = value.nrVersion;
      this._objectType = value.objectType;
      this._timestamp = value.timestamp;
      this._versionType = value.versionType;
      this._interestedMos.internalValue = value.interestedMos;
      this._refMo.internalValue = value.refMo;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // marked_for_deletion - computed: false, optional: true, required: false
  private _markedForDeletion?: boolean | cdktf.IResolvable; 
  public get markedForDeletion() {
    return this.getBooleanAttribute('marked_for_deletion');
  }
  public set markedForDeletion(value: boolean | cdktf.IResolvable) {
    this._markedForDeletion = value;
  }
  public resetMarkedForDeletion() {
    this._markedForDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markedForDeletionInput() {
    return this._markedForDeletion;
  }

  // nr_version - computed: false, optional: true, required: false
  private _nrVersion?: string; 
  public get nrVersion() {
    return this.getStringAttribute('nr_version');
  }
  public set nrVersion(value: string) {
    this._nrVersion = value;
  }
  public resetNrVersion() {
    this._nrVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nrVersionInput() {
    return this._nrVersion;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // version_type - computed: false, optional: true, required: false
  private _versionType?: string; 
  public get versionType() {
    return this.getStringAttribute('version_type');
  }
  public set versionType(value: string) {
    this._versionType = value;
  }
  public resetVersionType() {
    this._versionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionTypeInput() {
    return this._versionType;
  }

  // interested_mos - computed: false, optional: true, required: false
  private _interestedMos = new DataIntersightMacpoolReservationVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }
  public putInterestedMos(value: DataIntersightMacpoolReservationVersionContextInterestedMos[] | cdktf.IResolvable) {
    this._interestedMos.internalValue = value;
  }
  public resetInterestedMos() {
    this._interestedMos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interestedMosInput() {
    return this._interestedMos.internalValue;
  }

  // ref_mo - computed: false, optional: true, required: false
  private _refMo = new DataIntersightMacpoolReservationVersionContextRefMoOutputReference(this, "ref_mo");
  public get refMo() {
    return this._refMo;
  }
  public putRefMo(value: DataIntersightMacpoolReservationVersionContextRefMo) {
    this._refMo.internalValue = value;
  }
  public resetRefMo() {
    this._refMo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refMoInput() {
    return this._refMo.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation intersight_macpool_reservation}
*/
export class DataIntersightMacpoolReservation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "intersight_macpool_reservation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIntersightMacpoolReservation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIntersightMacpoolReservation to import
  * @param importFromId The id of the existing DataIntersightMacpoolReservation that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIntersightMacpoolReservation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "intersight_macpool_reservation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.71/docs/data-sources/macpool_reservation intersight_macpool_reservation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIntersightMacpoolReservationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIntersightMacpoolReservationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'intersight_macpool_reservation',
      terraformGeneratorMetadata: {
        providerName: 'intersight',
        providerVersion: '1.0.71'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountMoid = config.accountMoid;
    this._additionalProperties = config.additionalProperties;
    this._allocationType = config.allocationType;
    this._classId = config.classId;
    this._createTime = config.createTime;
    this._domainGroupMoid = config.domainGroupMoid;
    this._id = config.id;
    this._identity = config.identity;
    this._modTime = config.modTime;
    this._moid = config.moid;
    this._objectType = config.objectType;
    this._owners = config.owners;
    this._sharedScope = config.sharedScope;
    this._ancestors.internalValue = config.ancestors;
    this._blockHead.internalValue = config.blockHead;
    this._memberOf.internalValue = config.memberOf;
    this._organization.internalValue = config.organization;
    this._parent.internalValue = config.parent;
    this._permissionResources.internalValue = config.permissionResources;
    this._pool.internalValue = config.pool;
    this._poolMember.internalValue = config.poolMember;
    this._tags.internalValue = config.tags;
    this._universe.internalValue = config.universe;
    this._versionContext.internalValue = config.versionContext;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_moid - computed: false, optional: true, required: false
  private _accountMoid?: string; 
  public get accountMoid() {
    return this.getStringAttribute('account_moid');
  }
  public set accountMoid(value: string) {
    this._accountMoid = value;
  }
  public resetAccountMoid() {
    this._accountMoid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountMoidInput() {
    return this._accountMoid;
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // allocation_type - computed: false, optional: true, required: false
  private _allocationType?: string; 
  public get allocationType() {
    return this.getStringAttribute('allocation_type');
  }
  public set allocationType(value: string) {
    this._allocationType = value;
  }
  public resetAllocationType() {
    this._allocationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationTypeInput() {
    return this._allocationType;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // create_time - computed: false, optional: true, required: false
  private _createTime?: string; 
  public get createTime() {
    return this.getStringAttribute('create_time');
  }
  public set createTime(value: string) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
  }

  // domain_group_moid - computed: false, optional: true, required: false
  private _domainGroupMoid?: string; 
  public get domainGroupMoid() {
    return this.getStringAttribute('domain_group_moid');
  }
  public set domainGroupMoid(value: string) {
    this._domainGroupMoid = value;
  }
  public resetDomainGroupMoid() {
    this._domainGroupMoid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainGroupMoidInput() {
    return this._domainGroupMoid;
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

  // identity - computed: false, optional: true, required: false
  private _identity?: string; 
  public get identity() {
    return this.getStringAttribute('identity');
  }
  public set identity(value: string) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity;
  }

  // mod_time - computed: false, optional: true, required: false
  private _modTime?: string; 
  public get modTime() {
    return this.getStringAttribute('mod_time');
  }
  public set modTime(value: string) {
    this._modTime = value;
  }
  public resetModTime() {
    this._modTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modTimeInput() {
    return this._modTime;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // owners - computed: false, optional: true, required: false
  private _owners?: string[]; 
  public get owners() {
    return this.getListAttribute('owners');
  }
  public set owners(value: string[]) {
    this._owners = value;
  }
  public resetOwners() {
    this._owners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownersInput() {
    return this._owners;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataIntersightMacpoolReservationResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // shared_scope - computed: false, optional: true, required: false
  private _sharedScope?: string; 
  public get sharedScope() {
    return this.getStringAttribute('shared_scope');
  }
  public set sharedScope(value: string) {
    this._sharedScope = value;
  }
  public resetSharedScope() {
    this._sharedScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedScopeInput() {
    return this._sharedScope;
  }

  // ancestors - computed: false, optional: true, required: false
  private _ancestors = new DataIntersightMacpoolReservationAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }
  public putAncestors(value: DataIntersightMacpoolReservationAncestors[] | cdktf.IResolvable) {
    this._ancestors.internalValue = value;
  }
  public resetAncestors() {
    this._ancestors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorsInput() {
    return this._ancestors.internalValue;
  }

  // block_head - computed: false, optional: true, required: false
  private _blockHead = new DataIntersightMacpoolReservationBlockHeadOutputReference(this, "block_head");
  public get blockHead() {
    return this._blockHead;
  }
  public putBlockHead(value: DataIntersightMacpoolReservationBlockHead) {
    this._blockHead.internalValue = value;
  }
  public resetBlockHead() {
    this._blockHead.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockHeadInput() {
    return this._blockHead.internalValue;
  }

  // member_of - computed: false, optional: true, required: false
  private _memberOf = new DataIntersightMacpoolReservationMemberOfList(this, "member_of", false);
  public get memberOf() {
    return this._memberOf;
  }
  public putMemberOf(value: DataIntersightMacpoolReservationMemberOf[] | cdktf.IResolvable) {
    this._memberOf.internalValue = value;
  }
  public resetMemberOf() {
    this._memberOf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberOfInput() {
    return this._memberOf.internalValue;
  }

  // organization - computed: false, optional: true, required: false
  private _organization = new DataIntersightMacpoolReservationOrganizationOutputReference(this, "organization");
  public get organization() {
    return this._organization;
  }
  public putOrganization(value: DataIntersightMacpoolReservationOrganization) {
    this._organization.internalValue = value;
  }
  public resetOrganization() {
    this._organization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization.internalValue;
  }

  // parent - computed: false, optional: true, required: false
  private _parent = new DataIntersightMacpoolReservationParentOutputReference(this, "parent");
  public get parent() {
    return this._parent;
  }
  public putParent(value: DataIntersightMacpoolReservationParent) {
    this._parent.internalValue = value;
  }
  public resetParent() {
    this._parent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent.internalValue;
  }

  // permission_resources - computed: false, optional: true, required: false
  private _permissionResources = new DataIntersightMacpoolReservationPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }
  public putPermissionResources(value: DataIntersightMacpoolReservationPermissionResources[] | cdktf.IResolvable) {
    this._permissionResources.internalValue = value;
  }
  public resetPermissionResources() {
    this._permissionResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionResourcesInput() {
    return this._permissionResources.internalValue;
  }

  // pool - computed: false, optional: true, required: false
  private _pool = new DataIntersightMacpoolReservationPoolOutputReference(this, "pool");
  public get pool() {
    return this._pool;
  }
  public putPool(value: DataIntersightMacpoolReservationPool) {
    this._pool.internalValue = value;
  }
  public resetPool() {
    this._pool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool.internalValue;
  }

  // pool_member - computed: false, optional: true, required: false
  private _poolMember = new DataIntersightMacpoolReservationPoolMemberOutputReference(this, "pool_member");
  public get poolMember() {
    return this._poolMember;
  }
  public putPoolMember(value: DataIntersightMacpoolReservationPoolMember) {
    this._poolMember.internalValue = value;
  }
  public resetPoolMember() {
    this._poolMember.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolMemberInput() {
    return this._poolMember.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataIntersightMacpoolReservationTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataIntersightMacpoolReservationTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // universe - computed: false, optional: true, required: false
  private _universe = new DataIntersightMacpoolReservationUniverseOutputReference(this, "universe");
  public get universe() {
    return this._universe;
  }
  public putUniverse(value: DataIntersightMacpoolReservationUniverse) {
    this._universe.internalValue = value;
  }
  public resetUniverse() {
    this._universe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get universeInput() {
    return this._universe.internalValue;
  }

  // version_context - computed: false, optional: true, required: false
  private _versionContext = new DataIntersightMacpoolReservationVersionContextOutputReference(this, "version_context");
  public get versionContext() {
    return this._versionContext;
  }
  public putVersionContext(value: DataIntersightMacpoolReservationVersionContext) {
    this._versionContext.internalValue = value;
  }
  public resetVersionContext() {
    this._versionContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionContextInput() {
    return this._versionContext.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_moid: cdktf.stringToTerraform(this._accountMoid),
      additional_properties: cdktf.stringToTerraform(this._additionalProperties),
      allocation_type: cdktf.stringToTerraform(this._allocationType),
      class_id: cdktf.stringToTerraform(this._classId),
      create_time: cdktf.stringToTerraform(this._createTime),
      domain_group_moid: cdktf.stringToTerraform(this._domainGroupMoid),
      id: cdktf.stringToTerraform(this._id),
      identity: cdktf.stringToTerraform(this._identity),
      mod_time: cdktf.stringToTerraform(this._modTime),
      moid: cdktf.stringToTerraform(this._moid),
      object_type: cdktf.stringToTerraform(this._objectType),
      owners: cdktf.listMapper(cdktf.stringToTerraform, false)(this._owners),
      shared_scope: cdktf.stringToTerraform(this._sharedScope),
      ancestors: cdktf.listMapper(dataIntersightMacpoolReservationAncestorsToTerraform, true)(this._ancestors.internalValue),
      block_head: dataIntersightMacpoolReservationBlockHeadToTerraform(this._blockHead.internalValue),
      member_of: cdktf.listMapper(dataIntersightMacpoolReservationMemberOfToTerraform, true)(this._memberOf.internalValue),
      organization: dataIntersightMacpoolReservationOrganizationToTerraform(this._organization.internalValue),
      parent: dataIntersightMacpoolReservationParentToTerraform(this._parent.internalValue),
      permission_resources: cdktf.listMapper(dataIntersightMacpoolReservationPermissionResourcesToTerraform, true)(this._permissionResources.internalValue),
      pool: dataIntersightMacpoolReservationPoolToTerraform(this._pool.internalValue),
      pool_member: dataIntersightMacpoolReservationPoolMemberToTerraform(this._poolMember.internalValue),
      tags: cdktf.listMapper(dataIntersightMacpoolReservationTagsToTerraform, true)(this._tags.internalValue),
      universe: dataIntersightMacpoolReservationUniverseToTerraform(this._universe.internalValue),
      version_context: dataIntersightMacpoolReservationVersionContextToTerraform(this._versionContext.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_moid: {
        value: cdktf.stringToHclTerraform(this._accountMoid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_properties: {
        value: cdktf.stringToHclTerraform(this._additionalProperties),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allocation_type: {
        value: cdktf.stringToHclTerraform(this._allocationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      class_id: {
        value: cdktf.stringToHclTerraform(this._classId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_time: {
        value: cdktf.stringToHclTerraform(this._createTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_group_moid: {
        value: cdktf.stringToHclTerraform(this._domainGroupMoid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity: {
        value: cdktf.stringToHclTerraform(this._identity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mod_time: {
        value: cdktf.stringToHclTerraform(this._modTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      moid: {
        value: cdktf.stringToHclTerraform(this._moid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_type: {
        value: cdktf.stringToHclTerraform(this._objectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owners: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._owners),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      shared_scope: {
        value: cdktf.stringToHclTerraform(this._sharedScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ancestors: {
        value: cdktf.listMapperHcl(dataIntersightMacpoolReservationAncestorsToHclTerraform, true)(this._ancestors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightMacpoolReservationAncestorsList",
      },
      block_head: {
        value: dataIntersightMacpoolReservationBlockHeadToHclTerraform(this._blockHead.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightMacpoolReservationBlockHeadList",
      },
      member_of: {
        value: cdktf.listMapperHcl(dataIntersightMacpoolReservationMemberOfToHclTerraform, true)(this._memberOf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightMacpoolReservationMemberOfList",
      },
      organization: {
        value: dataIntersightMacpoolReservationOrganizationToHclTerraform(this._organization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightMacpoolReservationOrganizationList",
      },
      parent: {
        value: dataIntersightMacpoolReservationParentToHclTerraform(this._parent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightMacpoolReservationParentList",
      },
      permission_resources: {
        value: cdktf.listMapperHcl(dataIntersightMacpoolReservationPermissionResourcesToHclTerraform, true)(this._permissionResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightMacpoolReservationPermissionResourcesList",
      },
      pool: {
        value: dataIntersightMacpoolReservationPoolToHclTerraform(this._pool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightMacpoolReservationPoolList",
      },
      pool_member: {
        value: dataIntersightMacpoolReservationPoolMemberToHclTerraform(this._poolMember.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightMacpoolReservationPoolMemberList",
      },
      tags: {
        value: cdktf.listMapperHcl(dataIntersightMacpoolReservationTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightMacpoolReservationTagsList",
      },
      universe: {
        value: dataIntersightMacpoolReservationUniverseToHclTerraform(this._universe.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightMacpoolReservationUniverseList",
      },
      version_context: {
        value: dataIntersightMacpoolReservationVersionContextToHclTerraform(this._versionContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightMacpoolReservationVersionContextList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
